import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'minio';

@Injectable()
export class MinioService {
  private readonly logger = new Logger(MinioService.name);
  private client: Client;
  private bucket: string;

  constructor(
    private readonly confiService: ConfigService,
  ) {
    this.client = new Client({
      endPoint: this.confiService.get('endPoint') ?? '',
      port: this.confiService.get('port'),
      useSSL: this.confiService.get('useSSL'),
      accessKey: this.confiService.get('accessKey'),
      secretKey: this.confiService.get('secretKey'),
    });
    this.bucket = this.confiService.get('bucket') ?? '';
    this.initBucket();
  }

  /**
   * Ensure the bucket exists, create if not.
   */
  private async initBucket(): Promise<void> {
    try {
      const exists = await this.client.bucketExists(this.bucket);
      if (!exists) {
        await this.client.makeBucket(this.bucket, '');
        this.logger.log(`Bucket '${this.bucket}' created.`);
      } else {
        this.logger.log(`Bucket '${this.bucket}' exists.`);
      }
    } catch (error) {
      this.logger.error('Error initializing Minio bucket', error);
      throw new InternalServerErrorException('Failed to initialize Minio bucket');
    }
  }

  async uploadObject(
    objectName: string,
    path: string,
    size: number,
    metaData: Record<string, string> = {},
  ): Promise<string> {
    try {
      await this.client.putObject(this.bucket, objectName, path, size, metaData);
      this.logger.log(`Uploaded object: ${objectName}`);
      return objectName;
    } catch (error) {
      this.logger.error(`Failed to upload object: ${objectName}`, error);
      throw new InternalServerErrorException('Failed to upload object to Minio');
    }
  }

  async getObject(objectName: string): Promise<NodeJS.ReadableStream> {
    try {
      return await this.client.getObject(this.bucket, objectName);
    } catch (error) {
      this.logger.error(`Failed to get object: ${objectName}`, error);
      throw new InternalServerErrorException('Failed to get object from Minio');
    }
  }

  async removeObject(objectName: string): Promise<void> {
    try {
      await this.client.removeObject(this.bucket, objectName);
      this.logger.log(`Removed object: ${objectName}`);
    } catch (error) {
      this.logger.error(`Failed to remove object: ${objectName}`, error);
      throw new InternalServerErrorException('Failed to remove object from Minio');
    }
  }

  async bucketExists(): Promise<boolean> {
    try {
      return await this.client.bucketExists(this.bucket);
    } catch (error) {
      this.logger.error('Failed to check if bucket exists', error);
      throw new InternalServerErrorException('Failed to check bucket existence');
    }
  }

  async getPresignedUrl(objectName: string, expiry = 3600): Promise<string> {
    try {
      return await this.client.presignedGetObject(this.bucket, objectName, expiry);
    } catch (error) {
      this.logger.error(`Failed to generate presigned URL for object: ${objectName}`, error);
      throw new InternalServerErrorException('Failed to generate presigned URL');
    }
  }
}
