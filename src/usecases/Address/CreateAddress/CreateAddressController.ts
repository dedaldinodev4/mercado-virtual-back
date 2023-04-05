import { Request, Response } from 'express'
import { CreateAddressUseCase } from './CreateAddressUseCase'


export class CreateAddressController {
  constructor(
    private createAddressUseCase: CreateAddressUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { city, hood, contry, postal_code, id_user } = request.body;

    try {
      const data = await this.createAddressUseCase.execute({
        city, hood, contry, postal_code, id_user
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}