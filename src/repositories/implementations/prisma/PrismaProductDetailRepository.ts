import { prismaClient } from "../../../utils/prismaClient";
import { IProductDetail, IProductDetailRequest, IProductDetailUpdateRequest } from "../../../dtos/ProductDetail";
import { IProductDetailRepository } from "../../IProductDetailRepository";


export class PrismaProductDetailRepository implements IProductDetailRepository {
  private repository = prismaClient.productDetails;

  async findById(id: string): Promise<IProductDetail | null> {
    const productDetail = await this.repository.findFirst(
      {
        where: { id }
      });
      return productDetail ?? null;
  }

  async findAll(): Promise<IProductDetail[]> {
    const productDetails = await this.repository.findMany({});
    return productDetails ?? [];
  }

  async findByProduct(id_product: string): Promise<IProductDetail | null> {
    const productDetail = await this.repository.findFirst({
      where: { id_product }
    });
    return productDetail ?? null;
  }

  async create(data: IProductDetailRequest): Promise<IProductDetail> {
    const newProductDetail = await this.repository.create({
      data
    })
    return newProductDetail;
  }

  async update(id: string, productDetail: IProductDetailUpdateRequest): Promise<IProductDetail> {
    const productDetailUpdate = await this.repository.update({
      data: productDetail,
      where: { id }
    })
    return productDetailUpdate;
  }

  async delete(id: string): Promise<void> {
    const productDetailDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}