import { IBaseDTO } from "./Base";

export interface IProductImage extends IBaseDTO, IProductImageRequest {}

export interface IProductImageRequest {
  url: string;
  id_product: string;
}


