
export interface IUpdateProductCategoryRequest {
  id_category: string;
  id_product: string;
}

export interface IUpdateProductCategory extends IUpdateProductCategoryRequest {
  id: string;
  created_at: Date;
}
