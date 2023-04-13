import { IDevelyRepository } from "../../../repositories/IDevelyRepository";
import { IUpdateDevely, IUpdateDevelyRequest } from "./UpdateDevelyDTO";


export class UpdateDevelyUseCase {

    constructor(
        private develyRepository: IDevelyRepository
    ) { }

    async execute(id: string, data: IUpdateDevelyRequest): Promise<IUpdateDevely | Error> {
        const develyExists = await this.develyRepository.findById(id);

        if (!develyExists) {
            throw new Error('devely does not exists.')
        }
        const result = await this.develyRepository.update(id, data);

        return result;
    }
}