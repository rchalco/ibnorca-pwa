import { Praciclosprogauditorium } from "./Praciclosprogauditorium";

export class Pracicloparticipante {
    constructor(){

    }
    idCicloParticipante: number;
    idPrAcicloProgAuditoria: number | null;
    idParticipanteWs: string;
    participanteContextWs: string;
    idpCargoParticipante: number | null;
    usuarioRegistro: string;
    fechaDesde: string | null;
    idpEstadoParticipante: number | null;
    idPrAcicloProgAuditoriaNavigation: Praciclosprogauditorium;
}