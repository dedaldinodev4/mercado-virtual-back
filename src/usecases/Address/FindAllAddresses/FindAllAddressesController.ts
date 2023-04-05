import { Request, Response } from 'express'
import { FindAllAddressesUseCase } from './FindAllAddressesUseCase'


export class FindAllAddressesController {
    constructor(
        private findAllAddressesUseCase: FindAllAddressesUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
          const data = await this.findAllAddressesUseCase.execute()
          return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}