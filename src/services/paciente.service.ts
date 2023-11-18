import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  StreamableFile,
} from "@nestjs/common";
import { forwardRef } from "@nestjs/common/utils";
import { CreateTodoPaciente } from "src/dtos/paciente/createTodoPaciente.dto";
import { Paciente } from "src/entities/paciente.entity";
import IPacienteRepository from "src/repositories/paciente/paciente.repository.contract";
import { HistoricoService } from "./historico.service";
import { TrabalhoDePartoService } from "./trabalhoDeParto.service";
import { PuerperioService } from "./puerperio.service";
import { NascimentoService } from "./nascimento.service";
const PDFDocument = require("pdfkit");
import * as fs from "fs";
const blobStream = require("blob-stream");

@Injectable()
export class PacienteService {
  constructor(
    @Inject("IPacienteRepository")
    private readonly pacienteRepository: IPacienteRepository,
    @Inject(forwardRef(() => TrabalhoDePartoService))
    private readonly trabalhoDePartoService: TrabalhoDePartoService,
    @Inject(forwardRef(() => HistoricoService))
    private readonly historicoService: HistoricoService,
    @Inject(forwardRef(() => PuerperioService))
    private readonly puerperioService: PuerperioService,
    @Inject(forwardRef(() => NascimentoService))
    private readonly nascimentoService: NascimentoService
  ) {}
  async create(payload: CreateTodoPaciente) {
    const paciente = await this.pacienteRepository.create(
      new Paciente({ ...payload.paciente })
    );
    return { paciente };
  }
  async findAll() {
    const pacientes = await this.pacienteRepository.findAll();
    return pacientes.map((paciente) => {
      return {
        id: paciente.id,
        nome: paciente.nome,
        idade: paciente.idade,
        dataNascimento: paciente.dataNascimento,
        procedencia: paciente.procedencia,
        dataInternacao: paciente.historico[0]?.dataInternacao ?? "",
      };
    });
  }

  async delete(id: string) {
    return await this.pacienteRepository.delete(id);
  }

  async findOne(id: string) {
    return await this.pacienteRepository.findOne(id);
  }
  async update(id: string, payload: CreateTodoPaciente) {
    const paciente = await this.pacienteRepository.findOne(id);

    if (!paciente)
      throw new HttpException(
        "Paciente não encontrado",
        HttpStatus.UNAUTHORIZED
      );

    if (payload.historico) {
      const historico = await this.historicoService.findFirst(paciente.id);
      if (historico) {
        await this.historicoService.update(historico.id, payload.historico);
      } else await this.historicoService.create(payload.historico, paciente);
    }

    if (payload.trabalhoDeParto) {
      const trabalhoDeParto = await this.trabalhoDePartoService.findFirst(
        paciente.id
      );
      if (trabalhoDeParto) {
        await this.trabalhoDePartoService.update(
          trabalhoDeParto.id,
          payload.trabalhoDeParto
        );
      } else
        await this.trabalhoDePartoService.create(
          payload.trabalhoDeParto,
          paciente
        );
    }
    if (payload.puerperio) {
      const puerperio = await this.puerperioService.findFirst(paciente.id);
      if (puerperio) {
        await this.puerperioService.update(puerperio.id, payload.puerperio);
      } else await this.puerperioService.create(payload.puerperio, paciente);
    }

    if (payload.nascimento) {
      const nascimento = await this.nascimentoService.findFirst(paciente.id);
      if (nascimento) {
        await this.nascimentoService.update(nascimento.id, payload.nascimento);
      } else await this.nascimentoService.create(payload.nascimento, paciente);
    }
  }

  async generatePdf(id: string) {
    const paciente = await this.pacienteRepository.findOne(id);
    if (!paciente)
      throw new HttpException(
        "Paciente não encontrado",
        HttpStatus.UNAUTHORIZED
      );
    return paciente;
  }
}
