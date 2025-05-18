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
  throttler: {
    ttl: parseInt(process.env.THROTTLE_TTL || '60', 10), // 1 minute
    limit: parseInt(process.env.THROTTLE_LIMIT || '10', 10), // 10 requests per minute
  },
  openrouter: {
    apiKey: process.env.OPENROUTER_API_KEY || '',
    baseUrl: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
    defaultModel: process.env.OPENROUTER_DEFAULT_MODEL || 'openai/gpt-3.5-turbo',
    maxTokens: parseInt(process.env.OPENROUTER_MAX_TOKENS || '4000', 10),
    temperature: parseFloat(process.env.OPENROUTER_TEMPERATURE || '0.7'),
  },
});
