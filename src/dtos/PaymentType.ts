import { IBaseDTO } from "./Base";

export interface IPaymentType extends IBaseDTO, IPaymentTypeRequest{}

export interface IPaymentTypeRequest {
  name: string;
  description: string;
}

