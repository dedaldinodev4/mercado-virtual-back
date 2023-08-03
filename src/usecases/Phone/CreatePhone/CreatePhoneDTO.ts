
export interface ICreatePhone {
  id: string;
  number: string | null;
  id_user: string;
  created_at: Date;
}

export interface ICreatePhoneRequest {
  number?: string;
  id_user: string;
}