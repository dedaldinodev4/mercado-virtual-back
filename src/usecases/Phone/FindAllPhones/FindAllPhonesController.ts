import { Request, Response } from 'express'
import { FindAllPhonesUseCase } from './FindAllPhonesUseCase'


export class FindAllPhonesController {
    constructor(
        private findAllPhonesUseCase: FindAllPhonesUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
          const data = await this.findAllPhonesUseCase.execute()
          return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}