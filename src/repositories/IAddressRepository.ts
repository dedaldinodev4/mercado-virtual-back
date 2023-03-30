import { IAddress, IAddressRequest, IAddressUpdateRequest} from '../dtos/Address'

export interface IAddressRepository {
  findByCity(name: string): Promise<IAddress | null>;
  findById(id: string): Promise<IAddress | null>;
  findByIdUser(id_user: string): Promise<IAddress | null>;
  findAll(): Promise<IAddress[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IAddressUpdateRequest): Promise<IAddress | Error>;
  create(data: IAddressRequest): Promise<IAddress | Error>;
}