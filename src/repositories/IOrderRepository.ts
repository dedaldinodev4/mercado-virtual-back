import { IOrder, IOrderRequest, IOrderUpdateRequest} from '../dtos/Order'

export interface IOrderRepository {
  findByToken(name: string): Promise<IOrder | null>;
  findById(id: string): Promise<IOrder | null>;
  findByCustomer(id_customer: string): Promise<IOrder[]>;
  findAll(): Promise<IOrder[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IOrderUpdateRequest): Promise<IOrder | Error>;
  create(data: IOrderRequest): Promise<IOrder>;
}