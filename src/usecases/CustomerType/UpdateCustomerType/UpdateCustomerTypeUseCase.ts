import { ICustomerTypeRepository } from "../../../repositories/ICustomerTypeRepository";
import { IUpdateCustomerType, IUpdateCustomerTypeRequest } from "./UpdateCustomerTypeDTO";


export class UpdateCustomerTypeUseCase {

    constructor(
        private customerTypeRepository: ICustomerTypeRepository
    ){}

    async execute(id: string, data: IUpdateCustomerTypeRequest): Promise<IUpdateCustomerType | Error> {
        const customerTypeExists = await this.customerTypeRepository.findById(id);

        if (!customerTypeExists) {
          throw new Error('customerType does not exists.')
        }
        const result = await this.customerTypeRepository.update(id, data);

        return result;
    }
}