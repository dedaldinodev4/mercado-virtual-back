import { Request, Response } from 'express'
import { CreateProductShopOrderWithArrayUseCase } from './CreateProductShopOrderWithArrayUseCase'


export class CreateProductShopOrderWithArrayController {
  constructor(
    private createProductShopOrderWithArrayUseCase: CreateProductShopOrderWithArrayUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { products, id_order } = request.body;

    try {
      const data = await this.createProductShopOrderWithArrayUseCase.execute({
        products, id_order
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}