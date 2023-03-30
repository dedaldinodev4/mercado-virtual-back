import { IShop, IShopRequest, IShopUpdateRequest} from '../dtos/Shop'

export interface IShopRepository {
  findByName(name: string): Promise<IShop | null>;
  findById(id: string): Promise<IShop | null>;
  findByOwner(id_owner: string): Promise<IShop[]>;
  findByAddress(id_order: string): Promise<IShop[]>;
  findAll(): Promise<IShop[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IShopUpdateRequest): Promise<IShop | Error>;
  create(data: IShopRequest): Promise<IShop | Error>;
}