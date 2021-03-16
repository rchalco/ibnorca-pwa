import { Cargo } from "./cargo";
import { CargoItem } from "./cargo_item";
import { Personal } from "./personal";

export class Praprogramasdeauditorium {
  idPrAprogramaAuditoria: number;
  idparamArea: number | null;
  estado: string;
  nit: string;
  fecha: string;
  oficina: string;
  idOrganizacionWs: string;
  organizacionContentWs: string;
  codigoServicioWs: string;
  detalleServicioWs: string;
  idparamTipoServicio: number | null;
  codigoIafws: string;
  numeroAnios: number | null;
  usuarioRegistro: string;
  fechaDesde: string | null;
  fechaHasta: string | null;
  praciclosprogauditoria: Praciclosprogauditorium[];
}

export class Praciclosprogauditorium {
  idPrAcicloProgAuditoria: number;
  idPrAprogramaAuditoria: number | null;
  nombreOrganizacionCertificado: string;
  idparamEstadosProgAuditoria: number | null;
  estadoDescripcion: string;
  anio: number | null;
  idparamTipoAuditoria: number | null;
  usuarioRegistro: string;
  fechaDesde: string | null;
  fechaHasta: string | null;
  praciclocronogramas: Praciclocronograma[];
  praciclonormassistemas: Praciclonormassistema[];
  pracicloparticipantes: Pracicloparticipante[];
  pradireccionespaproductos: Pradireccionespaproducto[];
  pradireccionespasistemas: Pradireccionespasistema[];
}

export class Praciclocronograma {
  idCiclosCronogramas: number;
  idPrAcicloProgAuditoria: number | null;
  cantidadDeDiasTotal: number | null;
  mesProgramado: Date | null;
  mesReprogramado: Date | null;
  fechaInicioDeEjecucionDeAuditoria: Date | null;
  fechaDeFinDeEjecucionAuditoria: Date | null;
  usuarioRegistro: string;
  fechaDesde: Date | null;
  fechaHasta: Date | null;
  estado: string;
}

export class Praciclonormassistema {
  idCicloNormaSistema: number;
  idPrAcicloProgAuditoria: number | null;
  idparamNorma: number | null;
  norma: string;
  alcance: string;
  fechaEmisionPrimerCertificado: string | null;
  fechaVencimientoUltimoCertificado: string | null;
  numeroDeCertificacion: string;
  usuarioRegistro: string;
  fechaDesde: string | null;
  fechaHasta: string | null;
}

export class Pracicloparticipante {
  idCicloParticipante: number;
  idPrAcicloProgAuditoria: number | null;
  idParticipanteWs: number | null;
  participanteDetalleWs: string;
  idCargoWs: number | null;  
  cargoDetalleWs: string;
  usuarioRegistro: string;
  fechaDesde: string | null;
  dias: number | null;
  _cargo: CargoItem;
  _personal: Personal;
}

export class Pradireccionespaproducto {
  idDireccionPaproducto: number;
  idPrAcicloProgAuditoria: number | null;
  nombre: string;
  direccion: string;
  marca: string;
  sello: string;
  norma: string;
  ciudad: string;
  estado: string;
  pais: string;
  fechaEmisionPrimerCertificado: string | null;
  fechaVencimientoUltimoCertificado: string | null;
  fechaVencimientoCertificado: string | null;
  numeroDeCertificacion: string;
  usuarioRegistro: string;
  fechaDesde: string | null;
  fechaHasta: string | null;
}
export class Pradireccionespasistema {
  idDireccionPasistema: number;
  idPrAcicloProgAuditoria: number | null;
  direccion: string;  
  pais: string;
  departamento: string;
  ciudad: string;
  dias: number | null;
  usuarioRegistro: string;
  fechaDesde: string | null;
  fechaHasta: string | null;
}
