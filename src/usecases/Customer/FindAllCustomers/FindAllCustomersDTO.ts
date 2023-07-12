
export interface ICustomer{
  id: string;
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
  id_customerType: string; 
  gender: string | null;
  id_user: string;
  created_at: Date;
}