import { Request, Response } from 'express'
import { CreateProductDetailUseCase } from './CreateProductDetailUseCase'


export class CreateProductDetailController {
  constructor(
    private createProductDetailUseCase: CreateProductDetailUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id_product } = request.params;
    const { operating_system, ram, ssd, 
      battery, back_camera, front_camera, bluetooth, 
      connectionType, connectors, graphic, sound_isolating, 
      frequency_response, microphone, noise_cancelling, screen, ports, processor,
      warranty, wireless, wireless_standby_time
    } = request.body 

    try {
      const data = await this.createProductDetailUseCase.execute({
        operating_system, ram, ssd, 
        battery, back_camera, front_camera, bluetooth, 
        connectionType, connectors, graphic, sound_isolating, 
        frequency_response, microphone, noise_cancelling, screen, ports, processor,
        warranty, wireless, wireless_standby_time, id_product
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}