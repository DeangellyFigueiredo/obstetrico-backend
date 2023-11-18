import { v4 as uuid } from "uuid";
import { Historico } from "./historico.entity";
import { Nascimento } from "./nascimento.entity";
import { Puerperio } from "./puerperio.entity";
import { TrabalhoDeParto } from "./trabalhoDeParto.entity";

export class Paciente {
  id: string;
  nome: string;
  idade: string;
  dataNascimento: Date;
  corOuRaca: string;
  cns: string;
  profissao: string;
  escolaridade: string;
  nacionalidade: string;
  uf: string;
  naturalidade: string;
  procedenciaObservacao: string;
  estadoCivil: string;
  procedencia: string;
  historico?: Historico[];
  trabalhoDeParto?: TrabalhoDeParto[];
  nascimento?: Nascimento[];
  puerperio?: Puerperio[];
  createdAt: Date;
  updatedAt?: Date;

  constructor(props: Omit<Paciente, "id" | "createdAt">, id?: string) {
    Object.assign(this, props);
    this.id = id ?? uuid();
  }
}
