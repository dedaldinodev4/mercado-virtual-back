import { IDevely, IDevelyRequest, IDevelyUpdateRequest} from '../dtos/Devely'

export interface IDevelyRepository {
  findByLocation(location: string): Promise<IDevely | null>;
  findById(id: string): Promise<IDevely | null>;
  findByOrder(id_order: string): Promise<IDevely | null>;
  findByStatus(status: string): Promise<IDevely[]>;
  findAll(): Promise<IDevely[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IDevelyUpdateRequest): Promise<IDevely | Error>;
  create(data: IDevelyRequest): Promise<IDevely>;
}