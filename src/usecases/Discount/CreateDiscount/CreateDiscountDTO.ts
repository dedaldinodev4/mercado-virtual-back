
export interface ICreateDiscount {
  id: string;
  name: string;
  description: string;
  percent: number;
  status: boolean;
  created_at: Date;
}

export interface ICreateDiscountRequest {
  name: string;
  description: string;
  percent: number;
  status: boolean;
}