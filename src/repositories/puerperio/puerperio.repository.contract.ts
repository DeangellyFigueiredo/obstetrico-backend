import { CreatePuerperioDto } from "src/dtos/puerperio/createPuerperio.dto";
import { Puerperio } from "src/entities/puerperio.entity";

export default interface IPuerperioRepository {
  create(payload: Puerperio): Promise<Puerperio>;
  findFirst(pacienteId: string): Promise<Puerperio>;
  update(id: string, payload: CreatePuerperioDto): Promise<Puerperio>;
}
