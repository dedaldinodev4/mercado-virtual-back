import { IBaseDTO } from "./Base";

export interface IProductCategory extends IBaseDTO, IProductCategoryRequest {}

export interface IProductCategoryRequest {
  id_category: string;
  id_product: string;
}

export interface IProductCategoryUpdateRequest {
  id_category: string;
  id_product: string;
}

