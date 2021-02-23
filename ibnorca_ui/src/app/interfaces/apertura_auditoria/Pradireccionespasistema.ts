import { Praciclosprogauditorium } from "./Praciclosprogauditorium";


export class Pradireccionespasistema {
    constructor(){

    }
    idDireccionPasistema: number;
    idPrAcicloProgAuditoria: number | null;
    correlativo: number | null;
    oficina: string;
    direccion: string;
    idPais: number | null;
    idDepartamento: number | null;
    ciudad: string;
    dias: number | null;
    usuarioRegistro: string;
    fechaDesde: string | null;
    fechaHasta: string | null;
    idPrAcicloProgAuditoriaNavigation: Praciclosprogauditorium;
}