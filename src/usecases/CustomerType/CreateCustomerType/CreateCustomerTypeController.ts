import { Request, Response } from 'express'
import { CreateCustomerTypeUseCase } from './CreateCustomerTypeUseCase'


export class CreateCustomerTypeController {
  constructor(
    private createCustomerTypeUseCase: CreateCustomerTypeUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      const data = await this.createCustomerTypeUseCase.execute({
        name, description
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}