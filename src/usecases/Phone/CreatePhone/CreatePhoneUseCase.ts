import { IPhoneRepository } from "../../../repositories/IPhoneRepository";
import { ICreatePhone, ICreatePhoneRequest } from "./CreatePhoneDTO";


export class CreatePhoneUseCase {

    constructor(
        private phoneRepository: IPhoneRepository
    ){}

    async execute(data: ICreatePhoneRequest): Promise<ICreatePhone | Error> {
        const phoneExists = await this.phoneRepository.findByNumber(data.number);

        if (!data.number) {
            throw new Error('Number is required.')  
        }

        if (phoneExists) {
          throw new Error('Phone number already exists.')
        }
        const result = await this.phoneRepository.create(data);

        return result;
    }
}