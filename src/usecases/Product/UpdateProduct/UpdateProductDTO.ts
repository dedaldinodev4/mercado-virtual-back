import { Decimal } from "@prisma/client/runtime";


export interface IUpdateProductRequest {
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
}

export interface IUpdateProduct extends IUpdateProductRequest {
  id: string;
  starts_at: Date;
  ends_at: Date;
  id_category: string;
  id_discount: string;
  created_at: Date;
}
