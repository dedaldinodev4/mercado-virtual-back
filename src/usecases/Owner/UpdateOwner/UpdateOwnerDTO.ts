
export interface IUpdateOwnerRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
  gender: string | null;
}

export interface IUpdateOwner extends IUpdateOwnerRequest {
  id: string;
  id_user: string;
  created_at: Date;  
}
