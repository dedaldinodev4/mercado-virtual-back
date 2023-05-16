import { prismaClient } from "../../../utils/prismaClient";
import { IPhone, IPhoneRequest, IPhoneUpdateRequest } from "../../../dtos/Phone";
import { IPhoneRepository } from "../../IPhoneRepository";


export class PrismaPhoneRepository implements IPhoneRepository {
    private repository = prismaClient.phone;


    async findById(id: string): Promise<IPhone | null> {
        const phone = await this.repository.findFirst(
          { where: { id }
        });
        return phone ?? null;
    }

    async findByUser(id_user: string): Promise<IPhone[]> {
        const phones = await this.repository.findMany(
          { where: { id_user }
        });
        return phones ?? [];
    }

    async findByNumber(number: string): Promise<IPhone | null> {
        const phone = await this.repository.findFirst(
          { where: { number }
        });
        return phone ?? null;
    }

    async findAll(): Promise<IPhone[]> {
      const phones = await this.repository.findMany({});
      return phones ?? [];
    }
        
    async create(data: IPhoneRequest): Promise<IPhone> {
      const newPhone = await this.repository.create({
        data
      })
      return newPhone;
    }
    
    async update(id: string, phone: IPhoneUpdateRequest): Promise<IPhone> {
      const phoneUpdate = await this.repository.update({
        data: phone, 
        where: { id }
      })
      return phoneUpdate;
    }

    async delete(id: string): Promise<void> {
        const phoneDelete = await this.repository.delete({
          where: {
            id
          }
        })
    }

}