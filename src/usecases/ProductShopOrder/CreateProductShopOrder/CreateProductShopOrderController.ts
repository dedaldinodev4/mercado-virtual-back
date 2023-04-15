import { Request, Response } from 'express'
import { CreateProductShopOrderUseCase } from './CreateProductShopOrderUseCase'


export class CreateProductShopOrderController {
  constructor(
    private createProductShopOrderUseCase: CreateProductShopOrderUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id_productShop, id_order } = request.body;

    try {
      const data = await this.createProductShopOrderUseCase.execute({
        id_productShop, id_order
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}