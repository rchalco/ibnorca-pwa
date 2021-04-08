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
  elacronogamas: Elacronogama[];
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
}