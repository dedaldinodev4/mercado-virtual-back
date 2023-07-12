import { Decimal } from "@prisma/client/runtime";


export interface IUpdateProductRequest {
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
  isOffer: boolean;
  starRating: number;
}

export interface IUpdateProduct extends IUpdateProductRequest {
  id: string;
  starts_at: Date;
  timestamp: number;
  ends_at: Date;
  id_discount: string;
  created_at: Date;
}
