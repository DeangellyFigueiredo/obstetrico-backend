import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PacienteModule } from "./paciente.module";
import { ApiModule } from "./api.module";
import { RepositoryModule } from "./repository.module";
import { TrabalhoDePartoModule } from "./trabalhoDeParto.module";
import { EnfermeiroModule } from "./enfermeiro.module";
import { HistoricoModule } from "./historico.module";
import { PuerperioModule } from "./puerperio.module";
import { NascimentoModule } from "./nascimento.module";
import { AuthModule } from "./auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env" }),
    RepositoryModule,
    ApiModule,
    PacienteModule,
    TrabalhoDePartoModule,
    EnfermeiroModule,
    HistoricoModule,
    PuerperioModule,
    NascimentoModule,
    AuthModule,
  ],
})
export class AppModule {}
