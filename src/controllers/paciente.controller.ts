import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Response,
  Put,
} from "@nestjs/common";
import { Roles } from "src/decorators/roles.decorator";
import { CreateTodoPaciente } from "src/dtos/paciente/createTodoPaciente.dto";
import { PacienteService } from "src/services/paciente.service";
import * as PDFDocument from "pdfkit";
import * as fs from "fs";
import { prettifyString } from "src/utils/Utils";
@Controller("api/paciente")
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}
  @Post()
  @Roles("create-paciente")
  async create(@Body() payload: CreateTodoPaciente) {
    return await this.pacienteService.create(payload);
  }

  @Roles("list-paciente")
  @Get()
  async findAll() {
    return await this.pacienteService.findAll();
  }
  @Roles("list-paciente")
  @Get("/:id")
  async findOne(@Param("id") id: string) {
    console.log("pegando");
    return await this.pacienteService.findOne(id);
  }

  @Roles("delete-paciente")
  @Delete("/:id")
  async delete(@Param("id") id: string) {
    return await this.pacienteService.delete(id);
  }
  @Roles("update-paciente")
  @Put("/:id")
  async update(@Body() payload: CreateTodoPaciente, @Param("id") id: string) {
    return await this.pacienteService.update(id, payload);
  }

  @Get("/pdf/:id")
  async generatePdf(@Param("id") id: string, @Response() res) {
    const paciente = await this.pacienteService.generatePdf(id);
    try {
      const doc = new PDFDocument();
      doc.fontSize(15).text(paciente.nome);
      doc.fontSize(10).text(new Date(paciente.dataNascimento).toLocaleString());
      doc.moveDown();
      Object.keys(paciente).forEach((key) => {
        if (key === "id" || key === "createdAt" || key === "updatedAt") return;
        if (
          key === "historico" ||
          key === "trabalhoDeParto" ||
          key === "nascimento" ||
          key === "PuerperioImediato"
        ) {
          doc.moveDown();
          doc.fontSize(15).text(prettifyString(key));
          var text = "";
          if (paciente[key].length === 0) {
            doc.fontSize(10).text("Não há dados");
            return;
          }
          Object.keys(paciente[key][0]).forEach((chave) => {
            if (
              chave === "id" ||
              chave === "createdAt" ||
              chave === "updatedAt" ||
              chave === "pacienteId" ||
              chave === "historico"
            )
              return;

            if (
              chave === "dataInternacao" ||
              chave === "dataUltimaMenstruacao" ||
              chave === "dataProvavelParto" ||
              chave === "dataUltimoParto" ||
              chave === "dataDoParto" ||
              chave === "dataNascimento"
            ) {
              text += `${prettifyString(chave)}: ${new Date(
                paciente[key][0][chave]
              ).toLocaleString()} \n`;
              return;
            }

            if (typeof paciente[key][0][chave] === "boolean") {
              text += `${prettifyString(chave)}: ${
                paciente[key][0][chave] ? "SIM" : "NÃO"
              } \n`;
            } else {
              text += `${prettifyString(chave)}: ${paciente[key][0][chave]} \n`;
            }
          });
          doc.fontSize(10).text(text, {
            width: 410,
            columns: 2,
          });
          return;
        }
        if (
          key === "dataNascimento" ||
          key === "createdAt" ||
          key === "dataInternacao"
        ) {
          doc
            .fontSize(10)
            .text(
              `${prettifyString(key)}: ${new Date(
                paciente[key]
              ).toLocaleString()}`
            );
        } else {
          doc.fontSize(10).text(`${prettifyString(key)}: ${paciente[key]}`);
        }
      });
      res.setHeader("Content-Type", "application/pdf");
      doc.pipe(res);
      doc.end();
    } catch (err) {
      console.error("Erro ao gerar o PDF:", err);
    }
  }
}
