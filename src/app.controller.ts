import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): { id: number; message: string } {
    return { id: 1, message: 'Hello World' };
  }

  @Get('/test/query')
  getTestQuery(@Query('param') param: string): string {
    return `Hello World, param => ${param}`;
  }

  @Get('/test/default-query-value')
  getTestDefaultQueryValue(@Query('param') param = 'default'): string {
    return `Hello World, param => ${param}`;
  }

  @Get('/test/:param')
  getTestParam(@Param('param') param: string): string {
    return `Hello World, param => ${param}`;
  }
}
