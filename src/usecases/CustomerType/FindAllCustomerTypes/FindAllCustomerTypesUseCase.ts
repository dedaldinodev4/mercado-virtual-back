import { ICustomerTypeRepository } from "../../../repositories/ICustomerTypeRepository";
import { ICustomerType } from "./FindAllCustomerTypesDTO";


export class FindAllCustomerTypesUseCase {

  constructor(
    private customerTypeRepository: ICustomerTypeRepository
  ) { }

  async execute(): Promise<ICustomerType[]> {

    const customerTypes = await this.customerTypeRepository.findAll();
    return customerTypes;
  }
}