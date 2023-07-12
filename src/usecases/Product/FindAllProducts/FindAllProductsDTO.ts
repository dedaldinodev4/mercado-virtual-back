import { Decimal } from "@prisma/client/runtime";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: Decimal;
  quantity: number;
  id_discount: string;
  starts_at: Date;
  ends_at: Date;
  isOffer: boolean;
  timestamp: number;
  starRating: number;
  created_at: Date;
}