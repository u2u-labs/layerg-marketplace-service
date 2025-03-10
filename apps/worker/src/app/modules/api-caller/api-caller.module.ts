import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ApiCallerService } from './api-caller.service';

@Module({
  imports: [HttpModule],
  providers: [ApiCallerService],
  exports: [ApiCallerService],
})
export class ApiCallerModule {}
