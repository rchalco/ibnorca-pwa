import { Praciclosprogauditorium } from "./Praciclosprogauditorium";

export class Praciclocronograma {
    constructor(){

    }

    idCiclosCronogramas: number;
    idPrAcicloProgAuditoria: number | null;
    cantidadDeDiasTotal: number | null;
    mesProgramado: number | null;
    mesReprogramado: number | null;
    fechaInicioDeEjecucionDeAuditoria: string | null;
    fechaDeFinDeEjecucionAuditoria: string | null;
    usuarioRegistro: string;
    fechaDesde: string | null;
    fechaHasta: string | null;
    idPrAcicloProgAuditoriaNavigation: Praciclosprogauditorium;
}