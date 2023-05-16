import { ICart, ICartRequest, ICartUpdateRequest} from '../dtos/Cart'

export interface ICartRepository {
  findByToken(token: string): Promise<ICart | null>;
  findById(id: string): Promise<ICart | null>;
  findByCustomer(id_customer: string): Promise<ICart[]>;
  findByStatus(status: string): Promise<ICart[]>;
  findAll(): Promise<ICart[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: ICartUpdateRequest): Promise<ICart | Error>;
  create(data: ICartRequest): Promise<ICart>;
}