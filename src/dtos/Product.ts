import { Decimal } from "@prisma/client/runtime";
import { IBaseDTO } from "./Base";

export interface IProduct extends IBaseDTO {
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
  starts_at: Date;
  ends_at: Date;
  id_discount: string;
  isOffer: boolean;
  starRating: number;
  timestamp: number;
}

export interface IProductRequest {
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
  id_discount: string;
  isOffer: boolean;
  starRating: number;
  timestamp: number;
}

export interface IProductUpdateRequest {
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
  isOffer: boolean;
  starRating: number;
}

