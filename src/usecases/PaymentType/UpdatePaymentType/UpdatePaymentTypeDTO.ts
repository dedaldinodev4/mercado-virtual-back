
export interface IUpdatePaymentTypeRequest {
  name: string;
  description: string;
}

export interface IUpdatePaymentType extends IUpdatePaymentTypeRequest {
  id: string;
  created_at: Date;
}
