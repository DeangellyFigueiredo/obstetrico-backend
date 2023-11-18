import { Inject, Injectable } from "@nestjs/common";
import { CreatePuerperioDto } from "src/dtos/puerperio/createPuerperio.dto";
import { Paciente } from "src/entities/paciente.entity";
import { Puerperio } from "src/entities/puerperio.entity";
import IPuerperioRepository from "src/repositories/puerperio/puerperio.repository.contract";

@Injectable()
export class PuerperioService {
  constructor(
    @Inject("IPuerperioRepository")
    private readonly repository: IPuerperioRepository
  ) {}

  async findFirst(pacienteId: string) {
    return await this.repository.findFirst(pacienteId);
  }

  async update(id: string, payload: CreatePuerperioDto) {
    return await this.repository.update(id, payload);
  }

  async create(payload: CreatePuerperioDto, paciente: Paciente) {
    return await this.repository.create(
      new Puerperio({ ...payload }, paciente)
    );
  }
}
