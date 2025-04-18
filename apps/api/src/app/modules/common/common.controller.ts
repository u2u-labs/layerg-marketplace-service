import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

// @ts-ignore
import 'multer';

import { ApiTags } from '@nestjs/swagger';
import { CommonService } from './common.service';
import { CreateFileDto } from './dto/create-file.dto';
import { SearchAllDto } from './dto/search-all.dto';
import { multerOptions } from './interceptor/interceptor';

@Controller('common')
@ApiTags('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Post('upload-ipfs')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions))
  async uploadIpfs(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() createFileDto: CreateFileDto,
  ) {
    return await this.commonService.uploadIpfs(files, createFileDto.metadata);
  }

  @Get('/ipfs-serve')
  async serveFile(
    @Query('ipfsPath') ipfsPath: string,
    @Res() res: Response,
  ): Promise<any> {
    return await this.commonService.getFileFromIpfsPath(ipfsPath, res);
  }

  // Get Medata From IPFS Same ipfsPath/tokenid
  @Get('/ipfs-server/:ipfsPath/:id')
  async getIPFS(
    @Param('ipfsPath') ipfsPath: string,
    @Res() res: Response,
  ): Promise<any> {
    return await this.commonService.getFileFromIpfsPath(ipfsPath, res);
  }

  @Get('get-ipfs')
  async getIpfs(@Query('hash') hash: string) {
    return await this.commonService.getFromIpfs(hash);
  }

  // async getFileFromIpfs(@Query('hash') hash: string, @Res() res: Response) {
  //   return await this.commonService.getFileFromIpfs(hash, res);
  // }

  @Post('search-all')
  async searchAll(@Body() input: SearchAllDto) {
    return this.commonService.searchAll(input);
  }

  @Post('upload-s3')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions))
  async uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return this.commonService.uploadFile(files);
  }
}
