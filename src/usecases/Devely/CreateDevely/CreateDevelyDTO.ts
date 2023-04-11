
export interface ICreateDevelyRequest {
  location: string;
  status: string;
  id_order: string;
}

export interface ICreateDevely extends ICreateDevelyRequest {
  id: string;
  created_at: Date;
}