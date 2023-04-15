
export interface IPayment {
  id: string;
  code: string;
  mode: string;
  status: string;
  id_paymentType: string;
  id_order: string;
  created_at: Date;
}