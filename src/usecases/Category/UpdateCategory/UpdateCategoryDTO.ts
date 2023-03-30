
export interface IUpdateCategory {
  id: string;
  name: string;
  description: string;
  created_at: Date;
} 

export interface IUpdateCategoryRequest {
  name: string;
  description: string;
}