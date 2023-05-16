import { IPayment, IPaymentRequest, IPaymentUpdateRequest} from '../dtos/Payment'

export interface IPaymentRepository {
  findByCode(code: string): Promise<IPayment | null>;
  findById(id: string): Promise<IPayment | null>;
  findByOrder(id_order: string): Promise<IPayment | null>;
  findAll(): Promise<IPayment[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IPaymentUpdateRequest): Promise<IPayment | Error>;
  create(data: IPaymentRequest): Promise<IPayment>;
}