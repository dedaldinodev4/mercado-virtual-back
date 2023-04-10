import { Request, Response } from 'express'
import { FindByIdCustomerTypeUseCase } from './FindByIdCustomerTypeUseCase'


export class FindByIdCustomerTypeController {
  constructor(
    private findByIdCustomerTypeUseCase: FindByIdCustomerTypeUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.findByIdCustomerTypeUseCase.execute(id);

      return response.status(200).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}