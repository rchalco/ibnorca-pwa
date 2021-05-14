import {
  Praciclonormassistema,
  Pracicloparticipante,
  Pradireccionespaproducto,
  Pradireccionespasistema,
} from "../apertura_auditoria/Praprogramasdeauditorium";
import { Cliente } from "../General/Cliente";

export class PlanAuditoriaDTO {
  designacion: Designacion;
  pracicloparticipante: Pracicloparticipante[];
  elaauditorium: Elaauditorium;
  cliente: Cliente;
  praciclonormassistema: Praciclonormassistema[];
  pradireccionespaproducto: Pradireccionespaproducto[];
  pradireccionespasistema: Pradireccionespasistema[];
  nombreClienteCertificado: string;
  area: string;
  normas: string[];
}
export class Designacion {
  codigoServicio: string;
  tipoAuditroria: string;
  fechaAuditoria: string;
}

export class Elaauditorium {
  idelaAuditoria: number;
  idPrAcicloProgAuditoria: number | null;
  fechaRegistro: string | null;
  usuarioRegistro: string;
  elaadps: Elaadp[];
  elacontenidoauditoria: Elacontenidoauditorium[];
  elacronogamas: Elacronogama[];
  elahallazgos: Elahallazgo[];
}

export class Elaadp {
  idelaadp: number;
  idelaAuditoria: number | null;
  area: string;
  descripcion: string;
  fecha: string;
  usuario: string;
}

export class Elacontenidoauditorium {
  idelaContenidoauditoria: number;
  idelaAuditoria: number | null;
  label: string;
  nemotico: string;
  titulo: string;
  contenido: string;
  categoria: string;
  area: string;
  seleccionado: number | null;
  endocumento: number | null;
}
export class Elahallazgo {
  idelahallazgo: number;
  idelaAuditoria: number | null;
  tipo: string;
  tipoNemotico: string;
  normas: string;
  proceso: string;
  hallazgo: string;
  sitio: string;
  fecha: string | null;
  usuario: string;
}
export class Elacronogama {
  idElAcronograma: number;
  idelaauditoria: number | null;
  idDireccionPaproducto: number | null;
  idDireccionPasistema: number | null;
  fechaInicio: string | null;
  fechaFin: string | null;
  horario: string;
  requisitosEsquema: string;
  personaEntrevistadaCargo: string;
  usuarioRegistro: string;
  fechaRegistro: string | null;
  procesoArea: string;
  auditor: string;
  cargo: string;
  direccion: string;
}
