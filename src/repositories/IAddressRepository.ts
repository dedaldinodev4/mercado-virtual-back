import { IAddress, IAddressRequest, IAddressUpdateRequest} from '../dtos/Address'

export interface IAddressRepository {
  findByCity(city: string): Promise<IAddress | null>;
  findByPostalCode(postal_code: string): Promise<IAddress | null>;
  findById(id: string): Promise<IAddress | null>;
  findByIdUser(id_user: string): Promise<IAddress[]>;
  findAll(): Promise<IAddress[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IAddressUpdateRequest): Promise<IAddress | Error>;
  create(data: IAddressRequest): Promise<IAddress>;
}