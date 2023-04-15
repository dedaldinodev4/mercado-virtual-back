import { Request, Response } from 'express'
import { CreateShopUseCase } from './CreateShopUseCase'


export class CreateShopController {
  constructor(
    private createShopUseCase: CreateShopUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, id_address, id_owner } = request.body;

    try {
      const data = await this.createShopUseCase.execute({
        name, id_address, id_owner
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}