
export interface ICreateAddressRequest{
  city?: string;
  contry: string; 
  hood?: string; 
  postal_code?: string;
  id_user: string;  
}

export interface ICreateAddress {
  id: string;
  city: string | null;
  contry: string; 
  hood: string | null; 
  postal_code: string | null;
  id_user: string;  
  created_at: Date;
}
