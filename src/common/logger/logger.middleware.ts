import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}
  
    use(req: Request, res: Response, next: NextFunction): void {
      const { method, originalUrl, ip } = req;
      const userAgent = req.get('user-agent') || '';
      const start = Date.now();
  
      res.on('finish', () => {
        const duration = Date.now() - start;
        const { statusCode } = res;
  
        this.logger.info(`${method} ${originalUrl}`, {
          statusCode,
          duration: `${duration}ms`,
          ip,
          userAgent,
        });
      });
  
      next();
    }
  }