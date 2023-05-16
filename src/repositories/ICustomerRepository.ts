import { ICustomer, ICustomerRequest, ICustomerUpdateRequest} from '../dtos/Customer'

export interface ICustomerRepository {
  findByIdentity(identity: string): Promise<ICustomer | null>;
  findById(id: string): Promise<ICustomer | null>;
  findByIdUser(id: string): Promise<ICustomer | null>;
  findAll(): Promise<ICustomer[]>;
  findByType(id_custmerType: string): Promise<ICustomer[]>
  delete(id: string): Promise<void>;
  update(id: string, data: ICustomerUpdateRequest): Promise<ICustomer | Error>;
  create(data: ICustomerRequest): Promise<ICustomer>;
}