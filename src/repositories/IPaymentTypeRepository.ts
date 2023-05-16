import { IPaymentType, IPaymentTypeRequest } from '../dtos/PaymentType'

export interface IPaymentTypeRepository {
  findByName(name: string): Promise<IPaymentType | null>;
  findById(id: string): Promise<IPaymentType | null>;
  findAll(): Promise<IPaymentType[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IPaymentTypeRequest): Promise<IPaymentType | Error>;
  create(data: IPaymentTypeRequest): Promise<IPaymentType>;
}