import { Request, Response } from 'express'
import { CreateOrderUseCase } from './CreateOrderUseCase'


export class CreateOrderController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      token, id_session, id_customer,
      status, totalDiscount, total
    } = request.body;

    try {
      const data = await this.createOrderUseCase.execute({
        token, id_session, id_customer,
        status, totalDiscount, total
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}