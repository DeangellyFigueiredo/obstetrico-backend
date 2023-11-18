import { Module } from "@nestjs/common";
import { NascimentoRepository } from "src/repositories/nascimento/nascimento.repository";
import { NascimentoService } from "src/services/nascimento.service";

@Module({
  providers: [
    NascimentoService,
    {
      provide: "INascimentoRepository",
      useClass: NascimentoRepository,
    },
  ],
  exports: [NascimentoService],
})
export class NascimentoModule {}
