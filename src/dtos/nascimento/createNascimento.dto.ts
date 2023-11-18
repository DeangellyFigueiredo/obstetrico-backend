import { IsBoolean, IsDateString, IsString } from "class-validator";

export class CreateNascimentoDTO {
  @IsDateString()
  dataDoParto: Date;
  @IsString()
  horaDoParto: string;
  @IsString()
  tipoDeParto: string;
  @IsString()
  outrasInformacoesParto: string;
  @IsString()
  posicaoDoParto: string;
  @IsString()
  outrasInformacoesPosicao: string;
  @IsString()
  perineo: string;
  @IsString()
  laceracao: string;
  @IsString()
  localizacaoLaceracao: string;
  @IsString()
  sutura: string;
  @IsString()
  circularCordao: string;
  @IsString()
  quantasVoltas: string;
  @IsString()
  apertadoFrouxo: string;
  @IsString()
  complicacoes: string;
  @IsString()
  conduta: string;
  @IsString()
  dequitacao: string;
  @IsDateString()
  horaDequitacao: string;
  @IsString()
  mecanismo: string;
  @IsString()
  intercorrencias: string;
  @IsString()
  loquios: string;
  @IsString()
  globoPinard: string;
  @IsString()
  utero: string;
  @IsString()
  localizacaoUtero: string;
  @IsString()
  pressaoArterial: string;
  @IsString()
  pulso: string;
  @IsString()
  bpm: string;
  @IsString()
  respiracao: string;
  @IsString()
  temperatura: string;
  @IsString()
  outrasInformacoesPeriodo: string;
  @IsString()
  rn: string;
  @IsString()
  chorouAoNascer: string;
  @IsString()
  ativoHipoativo: string;
  @IsString()
  sexo: string;
  @IsString()
  semAnormaMalFormacao: string;
  @IsString()
  apgar1: string;
  @IsString()
  apgar2: string;
  @IsString()
  apgar5: string;
  @IsString()
  capurro: string;
  @IsString()
  clampeamento: string;
  @IsString()
  contatoPelePele: string;
  @IsString()
  aleitamento1hora: string;
  @IsString()
  quemCortouCordao: string;
  @IsBoolean()
  aspiracaoOral: boolean;
  @IsBoolean()
  lavagemGasttricame: boolean;
  @IsBoolean()
  reanimacao: boolean;
  @IsBoolean()
  ventilacaoPressao: boolean;
  @IsBoolean()
  oxigenioterapia: boolean;
  @IsBoolean()
  nenhum: boolean;
  @IsString()
  peso: string;
  @IsString()
  altura: string;
  @IsString()
  perimetroCefalicoso: string;
  @IsString()
  perimetroToracico: string;
  @IsString()
  perimetroAbdominal: string;
  @IsString()
  kanakion: string;
  @IsBoolean()
  bercoAquecido: boolean;
  @IsBoolean()
  cepap: boolean;
  @IsBoolean()
  alojamentoConjunto: boolean;
  @IsBoolean()
  transferidoUnidade: boolean;
  @IsString()
  outrasInformacoesRn: string;
}
