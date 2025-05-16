export default () => ({
  port: parseInt(process.env.PORT ?? "3001", 10),
  database_url: process.env.DATABASE_URL || 'mongodb://localhost:27017/nest',
  jwt_secret: process.env.JWT_SECRET || 'default_jwt_secret_for_development',
  endPointMinio: process.env.MINIO_END_POINT || 'localhost',
  portMinio: parseInt(process.env.MINIO_PORT || '9000', 10),
  useSSLMinio: process.env.MINIO_USE_SSL === 'true',
  accessKeyMinio: process.env.MINIO_ACCESS_KEY || 'minio',
  secretKeyMinio: process.env.MINIO_SECRET_KEY || 'minio123',
  bucketMinio: process.env.MINIO_BUCKET || 'pilput-storage',
});
