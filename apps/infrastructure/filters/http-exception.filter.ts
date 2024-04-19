import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Response } from 'express';

type ResponseType = {
  error?: string;
  message?: string;
};

export class ErrorResponse {
  @ApiProperty()
  public status: number;

  @ApiProperty()
  public code: string | undefined;

  @ApiProperty()
  public message: string | undefined;

  constructor(exception: HttpException) {
    const response = exception.getResponse() as ResponseType;
    if (typeof response === 'object') {
      this.status = exception.getStatus();
      this.code = response['error'];
      this.message = response['message'];
    } else {
      this.status = exception.getStatus();
      this.code = response;
      this.message = response;
    }
  }

  toJson() {
    return {
      status: this.status,
      code: this.code,
      message: this.message,
    };
  }
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const errorResponse = new ErrorResponse(exception);

    response.status(errorResponse.status).json(errorResponse.toJson());
  }
}
