import { Module } from '@nestjs/common';
import { ChanhXeRepo } from '../../repo';
import { ChanhXeService } from '../../service/chanhxe.service';
import { AuthMiddleware } from '../../../nmd_core/common/middlewares/bearer.middleware';
import { ChanhXeController } from '../../controller/chanhxe.controller';
import { ResponseService } from '../../../nmd_core/shared/response.service';
import { UserRepo } from '../../../auth_modules/repo';

@Module({
  imports: [],
  controllers: [ChanhXeController],
  providers: [
    ChanhXeRepo,
    ChanhXeService,
    AuthMiddleware,
    UserRepo,
    ResponseService,
  ],
  exports: [],
})
export class ChanhXeModule {}
