
export interface ICustomer{
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