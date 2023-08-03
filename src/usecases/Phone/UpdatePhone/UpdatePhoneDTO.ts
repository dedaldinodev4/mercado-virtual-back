
export interface IUpdatePhone {
  id: string;
  number: string | null;
  id_user: string;
  created_at: Date;
} 

export interface IUpdatePhoneRequest {
  number?: string;
}