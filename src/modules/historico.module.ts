import { Module } from "@nestjs/common";
import { HistoricoRepository } from "src/repositories/historico/historico.repository";
import { HistoricoService } from "../services/historico.service";

@Module({
  providers: [
    HistoricoService,
    {
      provide: "IHistoricoRepository",
      useClass: HistoricoRepository,
    },
  ],
  exports: [HistoricoService],
})
export class HistoricoModule {}
