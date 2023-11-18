import { Inject, Injectable } from "@nestjs/common";
import { CreateNascimentoDTO } from "src/dtos/nascimento/createNascimento.dto";
import { Nascimento } from "src/entities/nascimento.entity";
import { Paciente } from "src/entities/paciente.entity";
import INascimentoRepository from "src/repositories/nascimento/nascimento.repository.contract";

@Injectable()
export class NascimentoService {
  constructor(
    @Inject("INascimentoRepository")
    private readonly repository: INascimentoRepository
  ) {}

  async findFirst(pacienteId: string) {
    return await this.repository.findFirst(pacienteId);
  }

  async update(id: string, payload: CreateNascimentoDTO) {
    return await this.repository.update(id, payload);
  }

  async create(payload: CreateNascimentoDTO, paciente: Paciente) {
    return await this.repository.create(
      new Nascimento({ ...payload }, paciente)
    );
  }
}
