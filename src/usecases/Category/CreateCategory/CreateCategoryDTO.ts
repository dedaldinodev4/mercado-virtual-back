
export interface ICreateCategory {
  id: string;
  name: string;
  description: string;
  created_at: Date;
}

export interface ICreateCategoryRequest {
  name: string;
  description: string;
}