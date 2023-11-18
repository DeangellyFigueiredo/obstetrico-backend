import { Inject, Injectable } from "@nestjs/common";
import { CreateHistoricoDTO } from "src/dtos/historico/createHistorico.dto";
import { Historico } from "src/entities/historico.entity";
import { Paciente } from "src/entities/paciente.entity";
import IHistoricoRepository from "src/repositories/historico/historico.repository.contract";

@Injectable()
export class HistoricoService {
  constructor(
    @Inject("IHistoricoRepository")
    private readonly repository: IHistoricoRepository
  ) {}

  async create(payload: CreateHistoricoDTO, paciente: Paciente) {
    return await this.repository.create(
      new Historico({ ...payload }, paciente)
    );
  }

  async findFirst(pacienteId: string) {
    return await this.repository.findFirst(pacienteId);
  }

  async update(id: string, payload: CreateHistoricoDTO) {
    return await this.repository.update(id, payload);
  }
}
