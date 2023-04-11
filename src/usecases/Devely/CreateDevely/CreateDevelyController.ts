import { Request, Response } from 'express'
import { CreateDevelyUseCase } from './CreateDevelyUseCase'


export class CreateDevelyController {
  constructor(
    private createDevelyUseCase: CreateDevelyUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { status, id_order, location } = request.body;

    try {
      const data = await this.createDevelyUseCase.execute({
        status, id_order, location
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}