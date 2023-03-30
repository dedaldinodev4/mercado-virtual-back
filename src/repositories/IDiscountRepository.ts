import { IDiscount, IDiscountRequest } from '../dtos/Discount'

export interface IDiscountRepository {
  findByName(name: string): Promise<IDiscount | null>;
  findById(id: string): Promise<IDiscount | null>;
  findAll(): Promise<IDiscount[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IDiscountRequest): Promise<IDiscount | Error>;
  create(data: IDiscountRequest): Promise<IDiscount | Error>;
}