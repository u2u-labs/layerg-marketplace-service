import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ApiCallerService } from './api-caller.service';

@Module({
  imports: [HttpModule],
  providers: [ApiCallerService],
  exports: [ApiCallerService],
})
export class ApiCallerModule {}
