import { prismaClient } from "../../../utils/prismaClient";
import { IPhone, IPhoneRequest, IPhoneUpdateRequest } from "../../../dtos/Phone";
import { IPhoneRepository } from "../../IPhoneRepository";


export class PrismaPhoneRepository implements IPhoneRepository {
    private repository = prismaClient;


    async findById(id: string): Promise<IPhone | null> {
        const phone = await this.repository.phone.findFirst(
          { where: { id }
        });
        return phone;
    }

    async findByUser(id_user: string): Promise<IPhone[]> {
        const phones = await this.repository.phone.findMany(
          { where: { id_user }
        });
        return phones;
    }

    async findByNumber(number: string): Promise<IPhone | null> {
        const phone = await this.repository.phone.findFirst(
          { where: { number }
        });
        return phone;
    }

    async findAll(): Promise<IPhone[]> {
      const phones = await this.repository.phone.findMany({});
      return phones;
    }
        
    async create(data: IPhoneRequest): Promise<IPhone> {
      const newPhone = await this.repository.phone.create({
        data
      })
      return newPhone;
    }
    
    async update(id: string, phone: IPhoneUpdateRequest): Promise<IPhone> {
      const phoneUpdate = await this.repository.phone.update({
        data: phone, 
        where: { id }
      })
      return phoneUpdate;
    }

    async delete(id: string): Promise<void> {
        const phoneDelete = await this.repository.phone.delete({
          where: {
            id
          }
        })
    }

}