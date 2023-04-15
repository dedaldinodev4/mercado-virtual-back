import { Decimal } from "@prisma/client/runtime";

export interface ICreateProduct extends ICreateProductRequest {
  id: string;
  starts_at: Date;
  ends_at: Date;
  created_at: Date;
}

export interface ICreateProductRequest {
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
  id_category: string;
  id_discount: string;
}