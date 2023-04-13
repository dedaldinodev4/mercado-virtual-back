
export interface IUpdateDevelyRequest {
  location: string;
  status: string;
}

export interface IUpdateDevely extends IUpdateDevelyRequest {
  id: string;
  id_order: string;
  created_at: Date;
}

