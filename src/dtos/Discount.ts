import { IBaseDTO } from "./Base";

export interface IDiscount extends IBaseDTO, IDiscountRequest {}

export interface IDiscountRequest {
  name: string;
  description: string;
  percent: number;
  status: boolean;
}