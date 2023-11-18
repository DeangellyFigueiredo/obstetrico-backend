import { Paciente } from "./paciente.entity";
import { v4 as uuid } from "uuid";

export class Nascimento {
  id: string;
  paciente?: Paciente;
  dataDoParto: Date;
  horaDoParto: string;
  tipoDeParto: string;
  outrasInformacoesParto: string;
  posicaoDoParto: string;
  outrasInformacoesPosicao: string;
  perineo: string;
  laceracao: string;
  localizacaoLaceracao: string;
  sutura: string;
  circularCordao: string;
  quantasVoltas: string;
  apertadoFrouxo: string;
  complicacoes: string;
  conduta: string;
  dequitacao: string;
  horaDequitacao: string;
  mecanismo: string;
  intercorrencias: string;
  loquios: string;
  globoPinard: string;
  utero: string;
  localizacaoUtero: string;
  pressaoArterial: string;
  pulso: string;
  bpm: string;
  respiracao: string;
  temperatura: string;
  outrasInformacoesPeriodo: string;
  rn: string;
  chorouAoNascer: string;
  ativoHipoativo: string;
  sexo: string;
  semAnormaMalFormacao: string;
  apgar1: string;
  apgar2: string;
  apgar5: string;
  capurro: string;
  clampeamento: string;
  contatoPelePele: string;
  aleitamento1hora: string;
  quemCortouCordao: string;
  aspiracaoOral: boolean;
  lavagemGasttricame: boolean;
  reanimacao: boolean;
  ventilacaoPressao: boolean;
  oxigenioterapia: boolean;
  nenhum: boolean;
  peso: string;
  altura: string;
  perimetroCefalicoso: string;
  perimetroToracico: string;
  perimetroAbdominal: string;
  kanakion: string;
  bercoAquecido: boolean;
  cepap: boolean;
  alojamentoConjunto: boolean;
  transferidoUnidade: boolean;
  outrasInformacoesRn: string;
  createdAt: Date;
  constructor(
    props: Omit<Nascimento, "paciente" | "id" | "createdAt">,
    paciente?: Paciente,
    id?: string
  ) {
    Object.assign(this, props);
    this.paciente = paciente;
    this.id = id ?? uuid();
  }
}
