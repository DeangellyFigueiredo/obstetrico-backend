import { CreateHistoricoDTO } from "../historico/createHistorico.dto";
import { CreateNascimentoDTO } from "../nascimento/createNascimento.dto";
import { CreatePuerperioDto } from "../puerperio/createPuerperio.dto";
import { CreateTrabalhoDePartoDTO } from "../trabalhoDeParto/createTrabalhoDePArto.dto";
import { CreatePacienteDTO } from "./createPaciente.dto";

export class CreateTodoPaciente {
  paciente: CreatePacienteDTO;
  historico: CreateHistoricoDTO;
  trabalhoDeParto: CreateTrabalhoDePartoDTO;
  puerperio: CreatePuerperioDto;
  nascimento: CreateNascimentoDTO;
}
