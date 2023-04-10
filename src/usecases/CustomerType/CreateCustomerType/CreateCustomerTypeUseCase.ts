import { ICustomerTypeRepository } from "../../../repositories/ICustomerTypeRepository";
import { ICreateCustomerType, ICreateCustomerTypeRequest } from "./CreateCustomerTypeDTO";


export class CreateCustomerTypeUseCase {

  constructor(
    private customerTypeRepository: ICustomerTypeRepository
  ) { }

  async execute(data: ICreateCustomerTypeRequest): Promise<ICreateCustomerType | Error> {
    const customerTypeExists = await this.customerTypeRepository.findByName(data.name);

    if (!data) {
      throw new Error('Data is required.')
    }

    if (customerTypeExists) {
      throw new Error('customerType already exists.')
    }

    const result = await this.customerTypeRepository.create(data);

    return result;
  }
}