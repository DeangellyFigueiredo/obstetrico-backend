import { Injectable } from "@nestjs/common";
import { Pageable } from "src/configs/database/pageable.service";
import { PrismaService } from "src/configs/database/prisma.service";
import { CreateTrabalhoDePartoDTO } from "src/dtos/trabalhoDeParto/createTrabalhoDePArto.dto";
import { TrabalhoDeParto } from "src/entities/trabalhoDeParto.entity";
import ITrabalhoDePartoRepository from "./trabalhoDeParto.repository.contract";

@Injectable()
export class TrabalhoDePartoRepository
  extends Pageable<TrabalhoDeParto>
  implements ITrabalhoDePartoRepository
{
  constructor(private readonly repository: PrismaService) {
    super();
  }

  findFirst(pacienteId: string): Promise<TrabalhoDeParto> {
    return this.repository.trabalhoDeParto.findFirst({
      where: {
        pacienteId: pacienteId,
      },
    });
  }
  update(
    id: string,
    payload: CreateTrabalhoDePartoDTO
  ): Promise<TrabalhoDeParto> {
    return this.repository.trabalhoDeParto.update({
      where: {
        id: id,
      },
      data: {
        ...payload,
        createdAt: new Date(),
      },
    });
  }
  create(payload: TrabalhoDeParto): Promise<TrabalhoDeParto> {
    return this.repository.trabalhoDeParto.create({
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
