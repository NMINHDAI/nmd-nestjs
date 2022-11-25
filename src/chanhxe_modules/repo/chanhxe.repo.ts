import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ResponseService } from '../../nmd_core/shared/response.service';
import { IFResponse } from '../../nmd_core/shared/response.interface';
import { ChanhXe, ChanhXeModel } from '../model/chanhxe/chanhxe.model';

@Injectable()
export class ChanhXeRepo {
  constructor(private readonly responseService: ResponseService) {}

  async getById(id: ObjectId): Promise<ChanhXeModel> {
    const res: ChanhXeModel = await ChanhXe.findById(id);
    return res;
  }

  async create(item: any): Promise<ChanhXeModel> {
    const chanhxe = new ChanhXe(item);
    await chanhxe.save();

    return chanhxe;
  }

  async findAllAndPaging(
    { page, limit, sort }: { page: number; limit: number; sort?: any },
    filter?: any,
  ): Promise<IFResponse<ChanhXeModel>> {
    let skip = 0;
    skip = (page - 1) * limit;

    const chanhxes: ChanhXeModel[] = await ChanhXe.find(filter)
      .limit(limit)
      .skip(skip)
      .sort(sort);
    const totalRecords: number = await ChanhXe.countDocuments(filter);

    return this.responseService.getResponse<ChanhXeModel>(
      chanhxes,
      totalRecords,
      +page,
      +limit,
    );
  }

  async getAll({}, filter?: any): Promise<ChanhXeModel[]> {
    const chanhxes: ChanhXeModel[] = await ChanhXe.find(filter);

    return chanhxes;
  }

  async delete(id: ObjectId) {
    await ChanhXe.findByIdAndRemove(id);
    return;
  }
}
