import { Request, Response } from 'express'
import { FindAllCustomerTypesUseCase } from './FindAllCustomerTypesUseCase'


export class FindAllCustomerTypesController {
  constructor(
    private findAllCustomerTypesUseCase: FindAllCustomerTypesUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.findAllCustomerTypesUseCase.execute()
      return response.status(200).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}