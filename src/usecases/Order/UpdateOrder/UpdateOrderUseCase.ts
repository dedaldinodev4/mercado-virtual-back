import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IUpdateOrder, IUpdateOrderRequest } from "./UpdateOrderDTO";


export class UpdateOrderUseCase {

    constructor(
        private orderRepository: IOrderRepository
    ) { }

    async execute(id: string, data: IUpdateOrderRequest): Promise<IUpdateOrder | Error> {
        const orderExists = await this.orderRepository.findById(id);

        if (!orderExists) {
            throw new Error('Order does not exists.')
        }
        const result = await this.orderRepository.update(id, data);

        return result;
    }
}