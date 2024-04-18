import { Injectable, NestInterceptor } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common/interfaces/features/execution-context.interface';
import { CallHandler } from '@nestjs/common/interfaces/features/nest-interceptor.interface';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseSerializationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();

    return next.handle().pipe(
      map((data) => {
        return {
          isSuccess: true,
          code: response.statusCode,
          message: '요청에 성공하였습니다.',
          result: data,
        };
      }),
    );
  }
}
