
export interface ICustomer{
  id: string;
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
  gender: string | null;
  id_customerType: string; 
  id_user: string;
  created_at: Date;
}