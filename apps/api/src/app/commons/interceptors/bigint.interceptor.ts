import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const res: Response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => {
        // If res.json() was called, skip transformation
        if (res.headersSent) {
          return data;
        }
        return this.transformBigIntToString(data);
      }),
    );
  }

  private transformBigIntToString(data: any): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.transformBigIntToString(item));
    } else if (data !== null && typeof data === 'object') {
      Object.keys(data).forEach((key) => {
        if (typeof data[key] === 'bigint') {
          data[key] = data[key].toString();
        } else if (typeof data[key] === 'object') {
          data[key] = this.transformBigIntToString(data[key]);
        }
      });
      return data;
    }
    return data;
  }
}
