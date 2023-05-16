import { ICustomerType, ICustomerTypeRequest } from '../dtos/CustomerType'

export interface ICustomerTypeRepository {
  findByName(name: string): Promise<ICustomerType | null>;
  findById(id: string): Promise<ICustomerType | null>;
  findAll(): Promise<ICustomerType[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: ICustomerTypeRequest): Promise<ICustomerType | Error>;
  create(data: ICustomerTypeRequest): Promise<ICustomerType>;
}