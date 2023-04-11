import { IDevelyRepository } from "../../../repositories/IDevelyRepository";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { ICreateDevely, ICreateDevelyRequest } from "./CreateDevelyDTO";


export class CreateDevelyUseCase {

  constructor(
    private develyRepository: IDevelyRepository,
    private orderRepository: IOrderRepository
  ) { }

  async execute(data: ICreateDevelyRequest): Promise<ICreateDevely | Error> {

    if (!data) {
      throw new Error('Data is required.')
    }

    const orderExists = await this.orderRepository.findById(data.id_order)
    
    if (!orderExists) {
      throw new Error('Order does not exists.')
    }

    const result = await this.develyRepository.create(data);
    return result;
  }
}