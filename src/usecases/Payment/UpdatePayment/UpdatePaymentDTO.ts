
export interface IUpdatePaymentRequest {
  code: string;
  mode: string;
  status: string;
}

export interface IUpdatePayment extends IUpdatePaymentRequest {
  id: string;
  id_paymentType: string;
  id_order: string;
  created_at: Date;
}
