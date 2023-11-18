import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { EProcedenciaType } from "src/utils/ETypes";

export class CreatePacienteDTO {
  @IsString({ message: "Nome deve ser uma string" })
  nome: string;
  @IsString({ message: "Idade deve ser uma string" })
  idade: string;
  @IsDateString()
  dataNascimento: Date;
  @IsString({ message: "Cor deve ser uma string" })
  corOuRaca: string;
  @IsString({ message: "Cns deve ser uma string" })
  cns: string;
  @IsString({ message: "Profissão deve ser uma string" })
  profissao: string;
  @IsString({ message: "Escolaridade deve ser uma string" })
  escolaridade: string;
  @IsString({ message: "Nacionalidade deve ser uma string" })
  nacionalidade: string;
  @IsString({ message: "Estado civil deve ser uma string" })
  estadoCivil: string;
  @IsEnum(EProcedenciaType, {
    message: "Procedência deve ser do tipo TRANSFERIDA, SAMU ou OUTROS",
  })
  procedencia: EProcedenciaType;
  @IsString({ message: "Naturalidade deve ser uma string" })
  naturalidade: string;
  @IsString({ message: "Uf deve ser uma string" })
  uf: string;
  @IsString({ message: "Procedencia Observação deve ser uma string" })
  procedenciaObservacao: string;
}
