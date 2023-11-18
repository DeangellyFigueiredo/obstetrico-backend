import { IsBoolean, IsDateString, IsString } from "class-validator";

export class CreateTrabalhoDePartoDTO {
  @IsString()
  fr: string;
  @IsString()
  mrpm: string;
  @IsString()
  respiracao: string;
  @IsString()
  respiracaoNormoHipo: string;
  @IsString()
  nome: string;
  @IsString()
  idade: string;
  @IsDateString()
  dataNascimento: Date;
  @IsString()
  temperatura: string;
  @IsString()
  pa: string;
  @IsString()
  pulso: string;
  @IsBoolean()
  localDor: boolean;
  @IsString()
  batimentosFetais: string;
  @IsBoolean()
  hemorroidas: boolean;
  @IsBoolean()
  varizes: boolean;
  @IsBoolean()
  edemaLocal: string;
  @IsString()
  quantasCruzes: string;
  @IsString()
  outrasInformacoes: string;
  @IsBoolean()
  tontura: boolean;
  @IsBoolean()
  cefaleia: boolean;
  @IsBoolean()
  visaoTurva: boolean;
  @IsBoolean()
  convulsoes: boolean;
  @IsBoolean()
  confusaoMental: boolean;
  @IsBoolean()
  depressaoPosParto: string;
  @IsBoolean()
  integra: boolean;
  @IsBoolean()
  escoreacoes: boolean;
  @IsBoolean()
  feridas: boolean;
  @IsBoolean()
  hiperemia: boolean;
  @IsBoolean()
  hematomas: boolean;
  @IsBoolean()
  equimoses: boolean;
  @IsString()
  mamas: string;
  @IsString()
  mamilos: string;
  @IsBoolean()
  colostro: boolean;
  @IsString()
  outrasInformacoesColostro: string;
  @IsString()
  manobraDeLeopold: string;
  @IsString()
  apresentacao: string;
  @IsString()
  alturaUterina: string;
  @IsString()
  circunferenciaAbdominal: string;
  @IsString()
  mobilidadeCefalica: string;
  @IsString()
  coloDilatacao: string;
  @IsString()
  planoDeLee: string;
  @IsBoolean()
  observacaoToqueVaginal: boolean;
  @IsString()
  bolsa: string;
  @IsString()
  hora: string;
  @IsString()
  corDoLiquidoAmniotico: string;
  @IsString()
  outrasInformacoesToqueVaginal: string;
  @IsDateString()
  dataUltimaMenstruacao: Date;
  @IsDateString()
  dataProvavelParto: Date;
  @IsDateString()
  dataUltimoParto: Date;
  @IsBoolean()
  algumFilhoMalformado: boolean;
  @IsString()
  especifiqueFilhoMalformado: string;
  @IsBoolean()
  episiotomia: boolean;
  @IsBoolean()
  forcepes: boolean;
  @IsBoolean()
  hpp: boolean;
  @IsBoolean()
  retencaoPlacenta: boolean;
  @IsString()
  outrosPartosAnteriores: string;
  @IsString()
  tratamentoPartoAnterior: string;
  @IsString()
  dstIst: string;
  @IsString()
  outrasInformacoesReproducao: string;
  @IsString()
  peso: string;
  @IsString()
  altura: string;
  @IsString()
  ultimaRefeicao: string;
  @IsString()
  outrasInformacoesHidratacao: string;
  @IsBoolean()
  desidratada: boolean;
  @IsBoolean()
  fome: boolean;
  @IsBoolean()
  anorexia: boolean;
  @IsBoolean()
  sede: boolean;
  @IsBoolean()
  labiosRessecados: boolean;
  @IsBoolean()
  nauseas: boolean;
  @IsBoolean()
  vomitos: boolean;
  @IsString()
  vesical: string;
  @IsString()
  intestinal: string;
  @IsBoolean()
  evacuouAposParto: boolean;
  @IsString()
  tempoSemEvacuar: string;
  @IsString()
  vaginal: string;
  @IsString()
  outrasInformacoesVaginal: string;
  @IsString()
  protese: string;
  @IsString()
  ondeProtese: string;
  @IsString()
  dificuldadeDeLocomocao: string;
  @IsString()
  outrasInformacoesLocomocao: string;
  @IsString()
  redeVenosa: string;
  @IsString()
  puncaoVenosa: string;
  @IsString()
  dispositivoUtilizado: string;
  @IsBoolean()
  alergiaMedicamentos: boolean;
  @IsString()
  quaisMedicamentos: string;
  @IsString()
  tipoDeSangue: string;
  @IsBoolean()
  recebeuImunoglobulina: boolean;
  @IsString()
  vicios: string;
  @IsString()
  numeroCigarros: string;
  @IsString()
  usoDeDrogas: string;
  @IsBoolean()
  usoDuranteGestacao: boolean;
  @IsString()
  outrasInformacoesVicios: string;
  @IsString()
  acuidadeVisual: string;
  @IsString()
  acuidadeAuditiva: string;
  @IsString()
  movimentacaoFetal: string;
  @IsString()
  contracaoUterina: string;
  @IsString()
  frequencia: string;
  @IsString()
  intensidade: string;
  @IsBoolean()
  localDorAbdominal: boolean;
  @IsBoolean()
  localDorSacral: boolean;
  @IsBoolean()
  localDorLombar: boolean;
  @IsBoolean()
  localDorOutro: boolean;
  @IsBoolean()
  respiracaoAlivia: boolean;
  @IsBoolean()
  banhoMornoAlivia: boolean;
  @IsBoolean()
  posicaoAlivia: boolean;
  @IsBoolean()
  massagemAlivia: boolean;
  @IsBoolean()
  outrosAlivia: boolean;
  @IsBoolean()
  higieneDesconforto: boolean;
  @IsBoolean()
  acessoVenosoDesconforto: boolean;
  @IsBoolean()
  barulhoDesconforto: boolean;
  @IsBoolean()
  odorDesconforto: boolean;
  @IsBoolean()
  outrosDesconforto: boolean;
  @IsString()
  sonoRepouso: string;
  @IsString()
  numeroNoitesSemDormir: string;
  @IsString()
  motivoSemDormir: string;
  @IsBoolean()
  realizouAtividadeFisica: boolean;
  @IsString()
  quaisAtividades: string;
  @IsString()
  outrasInformacoesAtividade: string;
  @IsString()
  condicoesHigiene: string;
  @IsString()
  outrasInformacoesHigiene: string;
  @IsBoolean()
  preNatal: boolean;
  @IsString()
  numeroConsultas: string;
  @IsString()
  igQueIndicouPreNatal: string;
  @IsBoolean()
  planoDeParto: boolean;
  @IsBoolean()
  participouGrupoGestante: boolean;
  @IsBoolean()
  realizouVinculacao: boolean;
  @IsBoolean()
  tpParto: boolean;
  @IsBoolean()
  cesarea: boolean;
  @IsBoolean()
  intercorrenciasGestacao: boolean;
  @IsBoolean()
  amamentacao: boolean;
  @IsBoolean()
  alojamentoConjunto: boolean;
  @IsBoolean()
  puerperio: boolean;
  @IsBoolean()
  outros: boolean;
  @IsString()
  gostariaDeReceberInformacoes: string;
  @IsString()
  compreensao: string;
  @IsString()
  outrasInformacoesNecessidades: string;
  @IsBoolean()
  planejouGravidez: boolean;
  @IsBoolean()
  elaDesejaGravidez: boolean;
  @IsBoolean()
  pretendeAmamentar: boolean;
  @IsBoolean()
  amamentouOutrosFilhos: boolean;
  @IsString()
  quantosMeses: string;
  @IsBoolean()
  preocupacoesIncomoda: boolean;
  @IsBoolean()
  medosIncomoda: boolean;
  @IsBoolean()
  ansiedadeIncomoda: boolean;
  @IsBoolean()
  angustiaIncomoda: boolean;
  @IsBoolean()
  agitacaoIncomoda: boolean;
  @IsBoolean()
  choroIncomoda: boolean;
  @IsBoolean()
  gritoIncomoda: boolean;
  @IsBoolean()
  refereNaoTerEnergiaIncomoda: boolean;
  @IsBoolean()
  relutancaIncomoda: boolean;
  @IsBoolean()
  dificuldadeLidarIncomoda: boolean;
  @IsString()
  quaisExpectativas: string;
  @IsBoolean()
  religiao: boolean;
  @IsString()
  qualReligiao: string;
  @IsBoolean()
  fazAlgumaLimitacao: boolean;
  @IsString()
  quaisLimitacoes: string;
  @IsBoolean()
  desejaAcompanhante: boolean;
  @IsString()
  nomeAcompanhante: string;
  @IsString()
  vinculoAcompanhante: string;
  @IsBoolean()
  servicoSocialEncaminhamento: boolean;
  @IsBoolean()
  psicologoEncaminhamento: boolean;
  @IsBoolean()
  fisioterapiaEncaminhamento: boolean;
  @IsString()
  outrosEncaminhamentos: string;
  @IsString()
  outrasInformacoesEncaminhamento: string;
}
