

export interface ICreateOwnerRequest{
  firstName?: string;
  lastName?: string; 
  identity?: string; 
  dateBorn?: Date;
  gender: string | null;
  id_user: string;
}

export interface ICreateOwner {
  id: string;
  firstName: string | null;
  lastName: string | null; 
  identity: string | null; 
  dateBorn: Date | null;
  gender: string | null;
  id_user: string;
  created_at: Date;
}