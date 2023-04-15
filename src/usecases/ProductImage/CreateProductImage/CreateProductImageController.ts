import { Request, Response } from 'express'
import { CreateProductImageUseCase } from './CreateProductImageUseCase'


export class CreateProductImageController {
  constructor(
    private createProductImageUseCase: CreateProductImageUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { url, id_product } = request.body;

    try {
      const data = await this.createProductImageUseCase.execute({
        url, id_product
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}