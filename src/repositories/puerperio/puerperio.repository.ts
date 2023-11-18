import { Injectable } from "@nestjs/common";
import { Pageable } from "src/configs/database/pageable.service";
import { PrismaService } from "src/configs/database/prisma.service";
import { CreatePuerperioDto } from "src/dtos/puerperio/createPuerperio.dto";
import { Puerperio } from "src/entities/puerperio.entity";
import IPuerperioRepository from "./puerperio.repository.contract";

@Injectable()
export class PuerperioRepository
  extends Pageable<Puerperio>
  implements IPuerperioRepository
{
  constructor(private readonly repository: PrismaService) {
    super();
  }
  findFirst(pacienteId: string): Promise<Puerperio> {
    return this.repository.puerperioImediato.findFirst({
      where: {
        pacienteId: pacienteId,
      },
    });
  }
  update(id: string, payload: CreatePuerperioDto): Promise<Puerperio> {
    return this.repository.puerperioImediato.update({
      where: {
        id: id,
      },
      data: {
        ...payload,
      },
    });
  }
  create(payload: Puerperio): Promise<any> {
    return this.repository.puerperioImediato.create({
      data: {
        ...payload,
        paciente: {
          connect: {
            id: payload.paciente.id,
          },
        },
      },
    });
  }
}
