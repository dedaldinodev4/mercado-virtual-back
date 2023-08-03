
export interface IUpdateAddressRequest{
  city?: string;
  contry: string; 
  hood?: string; 
  postal_code?: string;
}

export interface IUpdateAddress {
  id: string;
  city: string | null;
  contry: string; 
  hood: string | null; 
  postal_code: string | null;
  id_user: string;  
  created_at: Date;  
}