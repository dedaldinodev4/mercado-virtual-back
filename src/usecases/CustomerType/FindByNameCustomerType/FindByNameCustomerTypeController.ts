import { Request, Response } from 'express'
import { FindByNameCustomerTypeUseCase } from './FindByNameCustomerTypeUseCase'


export class FindByNameCustomerTypeController {
  constructor(
    private findByNameCustomerTypeUseCase: FindByNameCustomerTypeUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.findByNameCustomerTypeUseCase.execute(id);

      return response.status(200).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}