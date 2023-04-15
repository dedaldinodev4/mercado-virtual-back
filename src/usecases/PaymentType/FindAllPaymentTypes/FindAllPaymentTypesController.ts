import { Request, Response } from 'express'
import { FindAllPaymentTypesUseCase } from './FindAllPaymentTypesUseCase'


export class FindAllPaymentTypesController {
  constructor(
    private findAllPaymentTypesUseCase: FindAllPaymentTypesUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.findAllPaymentTypesUseCase.execute()
      return response.status(200).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}