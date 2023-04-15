
export interface ICreatePaymentTypeRequest {
  name: string;
  description: string;
}

export interface ICreatePaymentType extends ICreatePaymentTypeRequest {
  id: string;
  created_at: Date;
}
