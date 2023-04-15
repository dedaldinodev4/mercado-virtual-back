import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { IUpdateOwner, IUpdateOwnerRequest } from "./UpdateOwnerDTO";


export class UpdateOwnerUseCase {

    constructor(
        private ownerRepository: IOwnerRepository
    ) { }

    async execute(id: string, data: IUpdateOwnerRequest): Promise<IUpdateOwner | Error> {
        const ownerExists = await this.ownerRepository.findById(id);

        if (!ownerExists) {
            throw new Error('Owner does not exists.');
        }
        const result = await this.ownerRepository.update(id, data);

        return result;
    }
}