import { Paciente } from "./paciente.entity";
import { v4 as uuid } from "uuid";

export class Historico {
  id: string;
  paciente?: Paciente;
  dmg: boolean;
  itu: boolean;
  hiperemese: boolean;
  fm: boolean;
  polidramnia: boolean;
  oligodramnia: boolean;
  sheg: boolean;
  hipotireoidismo: boolean;
  tpp: boolean;
  has: boolean;
  dm: boolean;
  doencaPsiquiatrica: boolean;
  outrasDoencasPrevias: string;
  tratamento: string;
  createdAt: Date;
  motivoInternacao: string;
  outroMotivoInternacao: string;
  motivoInternacaoObservacao: string;
  leito: string;
  dataInternacao: Date;
  horaInternacao: string;
  risco: string;
  constructor(
    props: Omit<Historico, "paciente" | "id" | "createdAt">,
    paciente?: Paciente,
    id?: string
  ) {
    Object.assign(this, props);
    this.paciente = paciente;
    this.id = id ?? uuid();
  }
}
