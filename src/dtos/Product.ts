import { Decimal } from "@prisma/client/runtime";
import { IBaseDTO } from "./Base";

export interface IProduct extends IBaseDTO {
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
  starts_at: Date;
  ends_at: Date;
  id_category: string;
  id_discount: string;
}

export interface IProductRequest {
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
  id_category: string;
  id_discount: string;
}

export interface IProductUpdateRequest {
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
}

