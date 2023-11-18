import { Module } from "@nestjs/common";
import { TrabalhoDePartoRepository } from "src/repositories/trabalhoDeParto/trabalhoDeParto.repository";
import { TrabalhoDePartoService } from "src/services/trabalhoDeParto.service";

@Module({
  providers: [
    TrabalhoDePartoService,
    {
      provide: "ITrabalhoDePartoRepository",
      useClass: TrabalhoDePartoRepository,
    },
  ],
  exports: [TrabalhoDePartoService],
})
export class TrabalhoDePartoModule {}
