import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    res.on('close', () => {
      const {
        headers: reqHeaders,
        ip,
        ips,
        method,
        originalUrl: url,
        params,
        query,
        body,
      } = res.req;
      const { statusCode, statusMessage } = res;
      const resHeaders = res.getHeaders();

      if (statusCode.toString().startsWith('2' || '3')) {
        this.logger.log({
          method,
          url,
          params,
          query,
          body,
          statusCode,
          statusMessage,
          reqHeaders,
          resHeaders,
          ip,
          ips,
        });
      } else {
        this.logger.error({
          method,
          url,
          params,
          query,
          body,
          statusCode,
          statusMessage,
          reqHeaders,
          resHeaders,
          ip,
          ips,
        });
      }
    });

    next();
  }
}
