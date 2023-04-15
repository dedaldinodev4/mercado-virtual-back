import { Request, Response } from 'express'
import { CreatePaymentUseCase } from './CreatePaymentUseCase'


export class CreatePaymentController {
  constructor(
    private createPaymentUseCase: CreatePaymentUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { code, mode, status, id_paymentType, id_order } = request.body;

    try {
      const data = await this.createPaymentUseCase.execute({
        code, mode, status, id_paymentType, id_order
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}