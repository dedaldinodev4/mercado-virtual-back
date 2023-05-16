import { prismaClient } from "../../../utils/prismaClient";
import { IProductImage, IProductImageRequest } from "../../../dtos/ProductImage";
import { IProductImageRepository } from "../../IProductImageRepository";


export class PrismaProductImageRepository implements IProductImageRepository {
  private repository = prismaClient.productImages;

  async findById(id: string): Promise<IProductImage | null> {
    const productImage = await this.repository.findFirst(
      {
        where: { id }
      });
      return productImage ?? null;
  }

  async findByUrl(url: string): Promise<IProductImage | null> {
    const productImage = await this.repository.findFirst(
      {
        where: { url }
      });
      return productImage ?? null;
  }

  async findAll(): Promise<IProductImage[]> {
    const productImages = await this.repository.findMany({});
    return productImages ?? [];
  }

  async findByProduct(id_product: string): Promise<IProductImage[]> {
    const productImages = await this.repository.findMany({
      where: { id_product }
    });
    return productImages ?? [];
  }

  async getImage(id: string): Promise<any> {
    const productImage = await this.repository.findFirst(
      {
        where: { id }
      });
  }

  async create(data: IProductImageRequest): Promise<IProductImage> {
    const newProductImage = await this.repository.create({
      data
    })
    return newProductImage;
  }

  async update(id: string, productImage: IProductImageRequest): Promise<IProductImage> {
    const productImageUpdate = await this.repository.update({
      data: productImage,
      where: { id }
    })
    return productImageUpdate;
  }

  async delete(id: string): Promise<void> {
    const productImageDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}