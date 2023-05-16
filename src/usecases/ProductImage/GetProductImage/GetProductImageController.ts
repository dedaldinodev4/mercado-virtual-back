import { Request, Response } from 'express'
import path from 'path'

import { GetProductImageUseCase } from './GetProductImageUseCase'
import { imageDirectory } from '../../../server';


export class GetProductImageController {
    constructor(
        private getProductImageUseCase: GetProductImageUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<any> {
        const { url } = request.params;

        try {
            const data = await this.getProductImageUseCase.execute(url);
            const imagePath = path.join(imageDirectory, url);

            return response.sendFile(imagePath);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}