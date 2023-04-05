
export interface ICreateAddressRequest{
  city: string;
  contry: string; 
  hood: string; 
  postal_code: string;
  id_user: string;  
}

export interface ICreateAddress extends ICreateAddressRequest {
  id: string;
  created_at: Date;
}
