
export interface IUpdateCart extends IUpdateCartRequest {
  id: string;
  id_customer: string;
  created_at: Date;
} 

export interface IUpdateCartRequest {
  id_session: string;
  token: string;
  status: string;
}
