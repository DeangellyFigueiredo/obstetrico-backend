import { Injectable } from "@nestjs/common";
import { Pageable } from "src/configs/database/pageable.service";
import { PrismaService } from "src/configs/database/prisma.service";
import { CreateNascimentoDTO } from "src/dtos/nascimento/createNascimento.dto";
import { Nascimento } from "src/entities/nascimento.entity";
import { getDateInLocaleTime } from "src/utils/date.service";
import INascimentoRepository from "./nascimento.repository.contract";

@Injectable()
export class NascimentoRepository
  extends Pageable<Nascimento>
  implements INascimentoRepository
{
  constructor(private readonly repository: PrismaService) {
    super();
  }

  findFirst(pacienteId: string): Promise<Nascimento> {
    return this.repository.nascimento.findFirst({
      where: {
        pacienteId: pacienteId,
      },
    });
  }
  update(id: string, payload: CreateNascimentoDTO): Promise<Nascimento> {
    return this.repository.nascimento.update({
      where: {
        id: id,
      },
      data: {
        ...payload,
      },
    });
  }

  create(payload: Nascimento): Promise<any> {
    return this.repository.nascimento.create({
      data: {
        ...payload,
        paciente: {
          connect: {
            id: payload.paciente.id,
          },
        },
        createdAt: getDateInLocaleTime(new Date()),
      },
    });
  }
}
