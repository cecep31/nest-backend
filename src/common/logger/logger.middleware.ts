import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}

    /**
     * Middleware to log HTTP requests and responses with high-resolution timing.
     * Logs method, URL, status, duration, IP, and user-agent. Handles both normal and aborted requests.
     * @param req Express Request
     * @param res Express Response
     * @param next NextFunction
     */
    use(req: Request, res: Response, next: NextFunction): void {
        const { method, originalUrl, ip } = req;
        const userAgent = req.get('user-agent') || '';
        // Use high-resolution time for accuracy
        const start = process.hrtime();
        let logged = false;

        const logRequest = (event: string) => {
            if (logged) return;
            logged = true;
            const [seconds, nanoseconds] = process.hrtime(start);
            const durationMs = Math.round((seconds * 1e9 + nanoseconds) / 1e6); // ms
            const { statusCode } = res;
            this.logger.info(`${method} ${originalUrl} [${event}]`, {
                statusCode,
                duration: `${durationMs}ms`,
                ip,
                userAgent,
            });
        };

        res.on('finish', () => logRequest('finish'));
        res.on('close', () => logRequest('close'));
        next();
    }
}