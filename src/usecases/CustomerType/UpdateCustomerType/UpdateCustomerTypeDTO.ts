
export interface IUpdateCustomerTypeRequest {
  name: string;
  description: string;
}

export interface IUpdateCustomerType extends IUpdateCustomerTypeRequest {
  id: string;
  created_at: Date;
}
