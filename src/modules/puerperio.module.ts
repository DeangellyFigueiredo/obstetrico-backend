import { Module } from "@nestjs/common";
import { PuerperioRepository } from "src/repositories/puerperio/puerperio.repository";
import { PuerperioService } from "src/services/puerperio.service";

@Module({
  providers: [
    PuerperioService,
    {
      provide: "IPuerperioRepository",
      useClass: PuerperioRepository,
    },
  ],
  exports: [PuerperioService],
})
export class PuerperioModule {}
