import { Module } from '@nestjs/common';
import { UserModule } from '../auth_modules/model/user/user.module';
import { ChanhXeModule } from './model/chanhxe/chanhxe.module';

@Module({
  imports: [UserModule, ChanhXeModule],
  providers: [],
  exports: [],
})
export class AMModule {}
