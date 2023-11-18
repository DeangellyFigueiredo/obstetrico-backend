import { CreateHistoricoDTO } from "src/dtos/historico/createHistorico.dto";
import { Historico } from "src/entities/historico.entity";

export default interface IHistoricoRepository {
  create(payload: Historico): Promise<Historico>;
  findFirst(pacienteId: string): Promise<Historico>;
  update(id: string, payload: CreateHistoricoDTO): Promise<Historico>;
}
