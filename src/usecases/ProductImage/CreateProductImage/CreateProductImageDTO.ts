
export interface ICreateProductImageRequest {
  url: string;
  id_product: string;
}

export interface ICreateProductImage extends ICreateProductImageRequest {
  id: string;
  created_at: Date;
}
