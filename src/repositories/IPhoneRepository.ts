import { IPhone, IPhoneRequest, IPhoneUpdateRequest } from '../dtos/Phone'

export interface IPhoneRepository {
  findByNumber(number: string): Promise<IPhone | null>;
  findById(id: string): Promise<IPhone | null>;
  findByUser(userId: string): Promise<IPhone[]>;
  findAll(): Promise<IPhone[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IPhoneUpdateRequest): Promise<IPhone | Error>;
  create(data: IPhoneRequest): Promise<IPhone>;
}