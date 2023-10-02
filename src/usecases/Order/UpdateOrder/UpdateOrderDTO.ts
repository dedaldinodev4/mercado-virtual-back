import { Decimal } from "@prisma/client/runtime";

export interface IUpdateOrderRequest {
  total: Decimal;
  totalDiscount: Decimal;
  quantity: number;
  status: string;
}

export interface IUpdateOrder extends IUpdateOrderRequest {
  id: string;
  id_session: string;
  token: string;
  id_customer: string;
  created_at: Date;
}

