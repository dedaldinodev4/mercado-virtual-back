import { IBaseDTO } from "./Base"

export interface IPayment extends IBaseDTO, IPaymentRequest {}

export interface IPaymentRequest {
  code: string;
  mode: string;
  status: string;
  id_paymentType: string;
  id_order: string;
}

export interface IPaymentUpdateRequest {
  code: string;
  mode: string;
  status: string;
}
