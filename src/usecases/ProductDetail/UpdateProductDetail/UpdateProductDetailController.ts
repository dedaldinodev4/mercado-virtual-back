import { Request, Response } from 'express'
import { UpdateProductDetailUseCase } from './UpdateProductDetailUseCase'


export class UpdateProductDetailController {
    constructor(
        private updateProductDetailUseCase: UpdateProductDetailUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { operating_system, ram, ssd, 
            battery, back_camera, front_camera, bluetooth, 
            connectionType, connectors, graphic, sound_isolating, 
            frequency_response, microphone, noise_cancelling, screen, ports, processor,
            warranty, wireless, wireless_standby_time } = request.body;

        try {
            const data = await this.updateProductDetailUseCase.execute(id, {
                operating_system, ram, ssd, 
                battery, back_camera, front_camera, bluetooth, 
                connectionType, connectors, graphic, sound_isolating, 
                frequency_response, microphone, noise_cancelling, screen, ports, processor,
                warranty, wireless, wireless_standby_time 
            });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}