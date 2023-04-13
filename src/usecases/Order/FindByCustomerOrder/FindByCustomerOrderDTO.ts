import { Decimal } from "@prisma/client/runtime";

export interface IOrder {
  id: string;
  id_session: string;
  total: Decimal;
  totalDiscount: Decimal;
  token: string;
  status: string;
  id_customer: string;
  created_at: Date;
}
