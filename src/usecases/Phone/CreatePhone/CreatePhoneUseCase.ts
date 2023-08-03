import { IPhoneRepository } from "../../../repositories/IPhoneRepository";
import { ICreatePhone, ICreatePhoneRequest } from "./CreatePhoneDTO";


export class CreatePhoneUseCase {

    constructor(
        private phoneRepository: IPhoneRepository
    ){}

    async execute(data: ICreatePhoneRequest): Promise<ICreatePhone | Error> {
        

        if (data.number) {
            const phoneExists = await this.phoneRepository.findByNumber(data.number);
            if (phoneExists) {
              throw new Error('Número já existe no sistema.')
            }
        }
        
        const result = await this.phoneRepository.create(data);

        return result;
    }
}