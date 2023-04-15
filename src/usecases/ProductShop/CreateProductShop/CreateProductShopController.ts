import { Request, Response } from 'express'
import { CreateProductShopUseCase } from './CreateProductShopUseCase'


export class CreateProductShopController {
  constructor(
    private createProductShopUseCase: CreateProductShopUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id_product, id_shop } = request.body;

    try {
      const data = await this.createProductShopUseCase.execute({
        id_product, id_shop
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}