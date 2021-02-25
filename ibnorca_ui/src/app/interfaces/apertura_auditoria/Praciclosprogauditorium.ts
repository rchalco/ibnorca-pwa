import { Praciclocronograma } from "./Praciclocronograma";
import { Praciclonormassistema } from "./Praciclonormassistema";
import { Pracicloparticipante } from "./Pracicloparticipante";
import { Pradireccionespaproducto } from "./Pradireccionespaproducto";
import { Pradireccionespasistema } from "./Pradireccionespasistema";
import { Praprogramasdeauditorium } from "./Praprogramasdeauditorium";

export class Praciclosprogauditorium {
    constructor(){

    }

    idPrAcicloProgAuditoria: number;
    idPrAprogramaAuditoria: number | null;
    nombreOrganizacionCertificado: string;
    ano: number | null;
    idpTipoAuditoria: number | null;
    usuarioRegistro: string;
    fechaDesde: string | null;
    fechaHasta: string | null;
    idPrAprogramaAuditoriaNavigation: Praprogramasdeauditorium;
    praciclocronogramas: Praciclocronograma[];
    praciclonormassistemas: Praciclonormassistema[];
    pracicloparticipantes: Pracicloparticipante[];
    pradireccionespaproductos: Pradireccionespaproducto[];
    pradireccionespasistemas: Pradireccionespasistema[];
}