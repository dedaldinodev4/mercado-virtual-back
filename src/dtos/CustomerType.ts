import { IBaseDTO } from "./Base";

export interface ICustomerType extends IBaseDTO, ICustomerTypeRequest{}

export interface ICustomerTypeRequest {
  name: string;
  description: string;
}

