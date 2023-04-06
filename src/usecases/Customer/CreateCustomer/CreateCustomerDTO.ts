

export interface ICreateCustomerRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
  id_customerType: string; 
  id_user: string;
}

export interface ICreateCustomer extends ICreateCustomerRequest{
  id: string;
  created_at: Date;  
}