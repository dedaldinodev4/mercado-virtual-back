
export interface ICreateProductCategoryRequest {
  id_product: string;
  id_category: string;
}

export interface ICreateProductCategory extends ICreateProductCategoryRequest {
  id: string;
  created_at: Date;
}
