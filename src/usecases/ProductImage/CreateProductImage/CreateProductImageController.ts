import { Request, Response } from 'express'
import { CreateProductImageUseCase } from './CreateProductImageUseCase'


export class CreateProductImageController {
  constructor(
    private createProductImageUseCase: CreateProductImageUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id_product } = request.params;
    const image = request.file?.filename ?? '';

    try {
      const data = await this.createProductImageUseCase.execute({
        url: image, id_product
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}