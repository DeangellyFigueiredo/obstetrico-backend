import { Injectable } from "@nestjs/common";
import { Pageable } from "src/configs/database/pageable.service";
import { PrismaService } from "src/configs/database/prisma.service";
import { Paciente } from "src/entities/paciente.entity";
import { getDateInLocaleTime } from "src/utils/date.service";
import IPacienteRepository from "./paciente.repository.contract";

@Injectable()
export class PacienteRepository
  extends Pageable<Paciente>
  implements IPacienteRepository
{
  constructor(private readonly repository: PrismaService) {
    super();
  }

  create(data: Paciente): Promise<Paciente> {
    return this.repository.paciente.create({
      data: {
        id: data.id,
        nome: data.nome,
        idade: data.idade,
        dataNascimento: data.dataNascimento,
        cns: data.cns,
        corOuRaca: data.corOuRaca,
        naturalidade: data.naturalidade,
        uf: data.uf,
        escolaridade: data.escolaridade,
        estadoCivil: data.estadoCivil,
        nacionalidade: data.nacionalidade,
        procedencia: data.procedencia,
        procedenciaObservacao: data.procedenciaObservacao,
        profissao: data.profissao,
        createdAt: getDateInLocaleTime(new Date()),
      },
    });
  }

  findAll(): Promise<Paciente[]> {
    return this.repository.paciente.findMany({
      include: {
        historico: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  delete(id: string): Promise<Paciente> {
    return this.repository.paciente.delete({
      where: {
        id: id as string,
      },
    });
  }

  findOne(id: string): Promise<any> {
    return this.repository.paciente.findUnique({
      where: {
        id: id,
      },
      include: {
        historico: true,
        trabalhoDeParto: true,
        nascimento: true,
        PuerperioImediato: true,
      },
    });
  }

  update(data: Paciente): Promise<Paciente> {
    return this.repository.paciente.update({
      where: {
        id: data.id,
      },
      data: {
        nome: data.nome,
        idade: data.idade,
        dataNascimento: data.dataNascimento,
        cns: data.cns,
        corOuRaca: data.corOuRaca,
        naturalidade: data.naturalidade,
        uf: data.uf,
        procedenciaObservacao: data.procedenciaObservacao,
        escolaridade: data.escolaridade,
        estadoCivil: data.estadoCivil,
        nacionalidade: data.nacionalidade,
        procedencia: data.procedencia,
        profissao: data.profissao,
        updatedAt: getDateInLocaleTime(new Date()),
      },
    });
  }
}
