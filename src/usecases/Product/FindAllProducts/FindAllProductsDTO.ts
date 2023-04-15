import { Decimal } from "@prisma/client/runtime";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
  id_category: string;
  id_discount: string;
  starts_at: Date;
  ends_at: Date;
  created_at: Date;
}