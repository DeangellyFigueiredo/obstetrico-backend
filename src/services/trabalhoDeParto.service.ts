import { Inject, Injectable } from "@nestjs/common";
import { CreateTrabalhoDePartoDTO } from "src/dtos/trabalhoDeParto/createTrabalhoDePArto.dto";
import { Paciente } from "src/entities/paciente.entity";
import { TrabalhoDeParto } from "src/entities/trabalhoDeParto.entity";
import ITrabalhoDePartoRepository from "src/repositories/trabalhoDeParto/trabalhoDeParto.repository.contract";

@Injectable()
export class TrabalhoDePartoService {
  constructor(
    @Inject("ITrabalhoDePartoRepository")
    private readonly trabalhoDePartoRepository: ITrabalhoDePartoRepository
  ) {}

  async findFirst(pacienteId: string) {
    return await this.trabalhoDePartoRepository.findFirst(pacienteId);
  }

  async update(id: string, payload: CreateTrabalhoDePartoDTO) {
    return await this.trabalhoDePartoRepository.update(id, payload);
  }
  async create(payload: CreateTrabalhoDePartoDTO, paciente: Paciente) {
    const trabalhoDeParto = await this.trabalhoDePartoRepository.create(
      new TrabalhoDeParto({ ...payload }, paciente)
    );
    return { trabalhoDeParto };
  }
}
