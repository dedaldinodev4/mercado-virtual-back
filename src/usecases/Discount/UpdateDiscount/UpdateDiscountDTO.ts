
export interface IUpdateDiscount {
  id: string;
  name: string;
  description: string;
  percent: number;
  status: boolean;
  created_at: Date;
}

export interface IUpdateDiscountRequest {
  name: string;
  description: string;
  percent: number;
  status: boolean;
}