import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'


export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name, description, price,
      quantity, id_category, id_discount
    } = request.body;

    try {
      const data = await this.createProductUseCase.execute({
        name, description, price,
        quantity, id_category, id_discount
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}