
export interface IUpdateCustomerRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
  gender: string | null;
}

export interface IUpdateCustomer extends IUpdateCustomerRequest {
  id: string;
  id_user: string;
  id_customerType: string;
  created_at: Date;  
}
