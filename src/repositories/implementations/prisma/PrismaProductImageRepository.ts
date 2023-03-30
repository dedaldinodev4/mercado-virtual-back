import { prismaClient } from "../../../utils/prismaClient";
import { IProductImage, IProductImageRequest } from "../../../dtos/ProductImage";
import { IProductImageRepository } from "../../IProductImageRepository";


export class PrismaProductShopRepository implements IProductImageRepository {
  private repository = prismaClient;

  async findById(id: string): Promise<IProductImage | null> {
    const productImage = await this.repository.productImages.findFirst(
      {
        where: { id }
      });
      return productImage
  }

  async findByUrl(url: string): Promise<IProductImage | null> {
    const productImage = await this.repository.productImages.findFirst(
      {
        where: { url }
      });
      return productImage
  }

  async findAll(): Promise<IProductImage[]> {
    const productImages = await this.repository.productImages.findMany({});
    return productImages;
  }

  async findByProduct(id_product: string): Promise<IProductImage[]> {
    const productImages = await this.repository.productImages.findMany({
      where: { id_product }
    });
    return productImages;
  }

  async create(data: IProductImageRequest): Promise<IProductImage> {
    const newProductImage = await this.repository.productImages.create({
      data
    })
    return newProductImage;
  }

  async update(id: string, productImage: IProductImageRequest): Promise<IProductImage> {
    const productImageUpdate = await this.repository.productImages.update({
      data: productImage,
      where: { id }
    })
    return productImageUpdate;
  }

  async delete(id: string): Promise<void> {
    const productImageDelete = await this.repository.productImages.delete({
      where: {
        id
      }
    })
  }

}