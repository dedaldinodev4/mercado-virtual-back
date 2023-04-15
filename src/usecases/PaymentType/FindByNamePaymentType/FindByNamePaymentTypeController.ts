import { Request, Response } from 'express'
import { FindByNamePaymentTypeUseCase } from './FindByNamePaymentTypeUseCase'


export class FindByNamePaymentTypeController {
  constructor(
    private findByNamePaymentTypeUseCase: FindByNamePaymentTypeUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.findByNamePaymentTypeUseCase.execute(id);

      return response.status(200).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}