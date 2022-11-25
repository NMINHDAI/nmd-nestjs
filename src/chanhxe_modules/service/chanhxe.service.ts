import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ReturnNotFoundException } from '../../nmd_core/common/utils/custom.error';
import { ChanhXeRepo } from '../repo';
import { CreateChanhXeReq } from '../request';

@Injectable()
export class ChanhXeService {
  constructor(private readonly chanhXeRepo: ChanhXeRepo) {}

  async getById(id: ObjectId) {
    const chanhxe = await this.chanhXeRepo.getById(id);
    if (!chanhxe) throw ReturnNotFoundException('Chanhxe not found.');
    return chanhxe;
  }

  async createChanhXe(createChanhXeReq: CreateChanhXeReq) {
    const chanhxe = await this.chanhXeRepo.create(createChanhXeReq);
    return chanhxe;
  }

  async getAll({ page, limit }: { page?: number; limit?: number }) {
    if (!page || page <= 0) {
      page = 1;
    }
    if (!limit) {
      limit = 20;
    }

    const res = await this.chanhXeRepo.findAllAndPaging({
      page,
      limit,
      sort: {},
    });

    return res;
  }
}
