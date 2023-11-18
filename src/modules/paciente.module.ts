import { forwardRef, Module } from "@nestjs/common";
import { PacienteRepository } from "src/repositories/paciente/paciente.repository";
import { PacienteService } from "src/services/paciente.service";
import { HistoricoModule } from "./historico.module";
import { TrabalhoDePartoModule } from "./trabalhoDeParto.module";
import { PuerperioModule } from "./puerperio.module";
import { NascimentoModule } from "./nascimento.module";
import { PacienteController } from "src/controllers/paciente.controller";

@Module({
  providers: [
    PacienteService,
    {
      provide: "IPacienteRepository",
      useClass: PacienteRepository,
    },
  ],
  controllers: [PacienteController],
  exports: [PacienteService],
  imports: [
    forwardRef(() => TrabalhoDePartoModule),
    forwardRef(() => HistoricoModule),
    forwardRef(() => PuerperioModule),
    forwardRef(() => NascimentoModule),
  ],
})
export class PacienteModule {}
