import { Injectable } from "@nestjs/common";
import { Pageable } from "src/configs/database/pageable.service";
import { PrismaService } from "src/configs/database/prisma.service";
import { CreateHistoricoDTO } from "src/dtos/historico/createHistorico.dto";
import { Historico } from "src/entities/historico.entity";
import IHistoricoRepository from "./historico.repository.contract";

@Injectable()
export class HistoricoRepository
  extends Pageable<Historico>
  implements IHistoricoRepository
{
  constructor(private readonly repository: PrismaService) {
    super();
  }
  findFirst(pacienteId: string): Promise<Historico> {
    return this.repository.historico.findFirst({
      where: {
        pacienteId: pacienteId,
      },
    });
  }
  update(id: string, payload: CreateHistoricoDTO): Promise<Historico> {
    return this.repository.historico.update({
      where: {
        id: id,
      },
      data: {
        dmg: payload.dmg,
        dm: payload.dm,
        doencaPsiquiatrica: payload.doencaPsiquiatrica,
        fm: payload.fm,
        has: payload.has,
        hiperemese: payload.hiperemese,
        hipotireoidismo: payload.hipotireoidismo,
        tpp: payload.tpp,
        itu: payload.itu,
        oligodramnia: payload.oligodramnia,
        outrasDoencasPrevias: payload.outrasDoencasPrevias,
        polidramnia: payload.polidramnia,
        sheg: payload.sheg,
        tratamento: payload.tratamento,
        dataInternacao: payload.dataInternacao,
        horaInternacao: payload.horaInternacao,
        leito: payload.leito,
        motivoInternacao: payload.motivoInternacao,
        motivoInternacaoObservacao: payload.motivoInternacaoObservacao,
        outroMotivoInternacao: payload.outroMotivoInternacao,
      },
    });
  }
  create(payload: Historico): Promise<any> {
    return this.repository.historico.create({
      data: {
        id: payload.id,
        paciente: {
          connect: {
            id: payload.paciente.id,
          },
        },
        dmg: payload.dmg,
        dm: payload.dm,
        doencaPsiquiatrica: payload.doencaPsiquiatrica,
        fm: payload.fm,
        has: payload.has,
        hiperemese: payload.hiperemese,
        hipotireoidismo: payload.hipotireoidismo,
        tpp: payload.tpp,
        risco: payload.risco,
        itu: payload.itu,
        oligodramnia: payload.oligodramnia,
        outrasDoencasPrevias: payload.outrasDoencasPrevias,
        polidramnia: payload.polidramnia,
        sheg: payload.sheg,
        tratamento: payload.tratamento,
        dataInternacao: payload.dataInternacao,
        horaInternacao: payload.horaInternacao,
        leito: payload.leito,
        motivoInternacao: payload.motivoInternacao,
        motivoInternacaoObservacao: payload.motivoInternacaoObservacao,
        outroMotivoInternacao: payload.outroMotivoInternacao,
        createdAt: new Date(),
      },
    });
  }
}
