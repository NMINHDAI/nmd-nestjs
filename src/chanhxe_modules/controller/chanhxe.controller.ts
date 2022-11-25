import {
  Controller,
  Post,
  Body,
  HttpCode,
  UsePipes,
  Req,
  Get,
  Query,
} from '@nestjs/common';
import { query, Request } from 'express';
import { AuthMiddleware } from '../../nmd_core/common/middlewares/bearer.middleware';
import { ValidationPipe } from '../../nmd_core/common/pipes/validation.pipe';
import { ReturnInternalServerError } from '../../nmd_core/common/utils/custom.error';
import { ChanhXeService } from '../service/chanhxe.service';
import { PagingPipe } from '../../nmd_core/common/pipes/paging.pipe';
import { CreateChanhXeReq } from '../request';

@Controller('/chanhxe')
export class ChanhXeController {
  constructor(
    private readonly chanhxeService: ChanhXeService,
    private readonly authMiddleWare: AuthMiddleware,
  ) {}

  @Post('/create')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async createChanhxe(
    @Req() req: Request,
    @Body() createChanhxeReq: CreateChanhXeReq,
  ) {
    try {
      const res = await this.chanhxeService.createChanhXe(createChanhxeReq);

      return {
        statusCode: 200,
        message: 'Create chanh xe successfully',
        data: res,
      };
    } catch (error) {
      if (error.status) throw error;
      else throw ReturnInternalServerError(error);
    }
  }

  @Get('')
  async getChanhxe(
    @Query(new PagingPipe())
    query: {
      page?: number;
      limit?: number;
    },
  ) {
    // await this.authMiddleWare.validateBearer(req);

    try {
      const res = await this.chanhxeService.getAll(query);
      return {
        statusCode: 200,
        message: 'Get all chanhxe info successfully',
        data: res,
      };
    } catch (error) {
      if (error.status) throw error;
      else throw ReturnInternalServerError(error);
    }
  }
}
