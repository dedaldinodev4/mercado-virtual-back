

export interface ICreateCartRequest {
  id_session: string;
  token: string;
  status: string;
  id_customer: string;
}

export interface ICreateCart extends ICreateCartRequest {
  id: string;
  created_at: Date;
}