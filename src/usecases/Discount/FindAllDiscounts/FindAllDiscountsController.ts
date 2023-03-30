import { Request, Response } from 'express'
import { FindAllDiscountsUseCase } from './FindAllDiscountsUseCase'


export class FindAllDiscountsController {
    constructor(
        private findAllDiscountsUseCase: FindAllDiscountsUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
          const data = await this.findAllDiscountsUseCase.execute()
          return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}