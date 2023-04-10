import { Request, Response } from 'express'
import { DeleteCustomerTypeUseCase } from './DeleteCustomerTypeUseCase'


export class DeleteCustomerTypeController {
  constructor(
    private deleteCustomerTypeUseCase: DeleteCustomerTypeUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.deleteCustomerTypeUseCase.execute(id);

      return response.status(204);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}