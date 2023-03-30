
export interface IUpdatePhone {
  id: string;
  number: string;
  id_user: string;
  created_at: Date;
} 

export interface IUpdatePhoneRequest {
  number: string;
}