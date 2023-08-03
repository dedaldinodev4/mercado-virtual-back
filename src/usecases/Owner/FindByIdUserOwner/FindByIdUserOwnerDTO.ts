
export interface IOwner{
  id: string;
  firstName: string | null;
  lastName: string | null; 
  identity: string | null; 
  dateBorn: Date | null;
  gender: string | null;
  id_user: string;
  created_at: Date;
}