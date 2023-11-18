import { CreateTrabalhoDePartoDTO } from "src/dtos/trabalhoDeParto/createTrabalhoDePArto.dto";
import { TrabalhoDeParto } from "src/entities/trabalhoDeParto.entity";

export default interface ITrabalhoDePartoRepository {
  create(payload: TrabalhoDeParto): Promise<TrabalhoDeParto>;

  findFirst(pacienteId: string): Promise<TrabalhoDeParto>;
  update(
    id: string,
    payload: CreateTrabalhoDePartoDTO
  ): Promise<TrabalhoDeParto>;
}
