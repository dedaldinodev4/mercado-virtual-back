
export interface IUpdateAddressRequest{
  city: string;
  contry: string; 
  hood: string; 
  postal_code: string;
}

export interface IUpdateAddress extends IUpdateAddressRequest {
  id: string;
  id_user: string;
  created_at: Date;  
}