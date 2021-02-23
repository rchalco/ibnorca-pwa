import { Praciclosprogauditorium } from "./Praciclosprogauditorium";

export class Praciclonormassistema {
    constructor(){

    }

    idCicloNormaSistema: number;
    idPrAcicloProgAuditoria: number | null;
    idpNorma: number | null;
    alcance: string;
    fechaEmisionPrimerCertificado: string | null;
    fechaVencimientoUltimoCertificado: string | null;
    numeroDeCertificacion: string;
    usuarioRegistro: string;
    fechaDesde: string | null;
    fechaHasta: string | null;
    idPrAcicloProgAuditoriaNavigation: Praciclosprogauditorium;
}