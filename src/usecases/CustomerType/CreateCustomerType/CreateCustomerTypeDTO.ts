
export interface ICreateCustomerTypeRequest {
  name: string;
  description: string;
}

export interface ICreateCustomerType extends ICreateCustomerTypeRequest {
  id: string;
  created_at: Date;
}
