import { CreateNascimentoDTO } from "src/dtos/nascimento/createNascimento.dto";
import { Nascimento } from "src/entities/nascimento.entity";

export default interface INascimentoRepository {
  create(payload: Nascimento): Promise<Nascimento>;
  findFirst(pacienteId: string): Promise<Nascimento>;
  update(id: string, payload: CreateNascimentoDTO): Promise<Nascimento>;
}
