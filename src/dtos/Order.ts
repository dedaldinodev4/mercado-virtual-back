import { Decimal } from "@prisma/client/runtime";
import { IBaseDTO } from "./Base";

export interface IOrder extends IBaseDTO, IOrderRequest {}

export interface IOrderRequest {
  id_session: string;
  total: Decimal;
  totalDiscount: Decimal;
  token: string;
  status: string;
  id_customer: string;
}

export interface IOrderUpdateRequest {
  total: Decimal;
  totalDiscount: Decimal;
  status: string;
}


