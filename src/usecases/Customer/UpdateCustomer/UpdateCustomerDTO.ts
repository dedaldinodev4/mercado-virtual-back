
export interface IUpdateCustomerRequest{
  firstName?: string;
  lastName?: string; 
  identity?: string; 
  dateBorn?: Date;
  gender: string | null;
}

export interface IUpdateCustomer {
  id: string;
  firstName: string | null;
  lastName: string | null; 
  identity: string | null; 
  dateBorn: Date | null;
  gender: string | null;
  id_customerType: string; 
  id_user: string;
  created_at: Date;
}
