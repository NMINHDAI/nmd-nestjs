import { IsNotEmpty, IsString } from 'class-validator';
import mongoose, { ObjectId, Schema } from 'mongoose';
export class ChanhXeModel {
  tenChanh: string;
  baiNhan: string;
  baiVe: string;
  sdt: string;
  gioHoatDong: string;
  diaBan: string;
}

const ChanhXeSchema = new Schema({
  name: { type: String, default: '' },
  baiNhan: { type: String, default: '' },
  baiVe: { type: String, default: '' },
  sdt: { type: String, default: '' },
  gioHoatDong: { type: String, default: '' },
  diaBan: { type: String, default: '' },
});

export const ChanhXe = mongoose.model<ChanhXeModel>('ChanhXe', ChanhXeSchema);
