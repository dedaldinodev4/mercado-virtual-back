import { IOwner, IOwnerRequest, IOwnerUpdateRequest} from '../dtos/Owner'

export interface IOwnerRepository {
  findByIdentity(identity: string): Promise<IOwner | null>;
  findById(id: string): Promise<IOwner | null>;
  findByIdUser(id_user: string): Promise<IOwner | null>;
  findAll(): Promise<IOwner[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IOwnerUpdateRequest): Promise<IOwner | Error>;
  create(data: IOwnerRequest): Promise<IOwner>;
}