
export interface ICreatePaymentRequest {
  code: string;
  mode: string;
  status: string;
  id_paymentType: string;
  id_order: string;
}

export interface ICreatePayment extends ICreatePaymentRequest {
  id: string;
  created_at: Date;
}
