
export interface IUpdateProductImageRequest {
  url: string;
  id_product: string;
}

export interface IUpdateProductImage extends IUpdateProductImageRequest {
  id: string;
  created_at: Date;
}
