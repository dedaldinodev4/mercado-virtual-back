import { Decimal } from "@prisma/client/runtime";

export interface ICreateOrderRequest {
  id_session: string;
  total: Decimal;
  totalDiscount: Decimal;
  quantity: number;
  token: string;
  status: string;
  id_customer: string;
}

export interface ICreateOrder extends ICreateOrderRequest {
  id: string;
  created_at: Date;
}