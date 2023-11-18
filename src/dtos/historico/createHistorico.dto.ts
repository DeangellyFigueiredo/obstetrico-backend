import { IsBoolean, IsDateString, IsOptional, IsString } from "class-validator";

export class CreateHistoricoDTO {
  dmg: boolean;
  itu: boolean;
  hiperemese: boolean;
  tpp: boolean;
  fm: boolean;
  polidramnia: boolean;
  oligodramnia: boolean;
  sheg: boolean;
  has: boolean;
  dm: boolean;
  hipotireoidismo: boolean;
  doencaPsiquiatrica: boolean;
  outrasDoencasPrevias: string;
  tratamento: string;
  outroMotivoInternacao: string;
  @IsString({ message: "Motivo internação deve ser uma string" })
  motivoInternacao: string;
  @IsString({ message: "Observação Motivo internação deve ser uma string" })
  @IsOptional()
  motivoInternacaoObservacao: string;
  @IsString({ message: "Leito deve ser uma string" })
  leito: string;
  @IsDateString()
  dataInternacao: Date;
  @IsDateString()
  horaInternacao: string;
  risco: string;
}
