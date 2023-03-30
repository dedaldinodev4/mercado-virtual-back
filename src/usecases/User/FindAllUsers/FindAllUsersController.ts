import { Request, Response } from 'express'
import { FindAllUsersUseCase } from './FindAllUsersUseCase'


export class FindAllUsersController {
    constructor(
        private findAllUsersUseCase: FindAllUsersUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
          const data = await this.findAllUsersUseCase.execute()
          return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}