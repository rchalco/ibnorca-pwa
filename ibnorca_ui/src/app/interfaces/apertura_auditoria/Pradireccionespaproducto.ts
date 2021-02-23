export class Pradireccionespaproducto {
    constructor(){

    }

    idDireccionPaproducto: number;
    idPrAcicloProgAuditoria: number | null;
    nombre: string;
    direccion: string;
    marca: string;
    sello: number | null;
    idPais: number | null;
    idDepartamento: number | null;
    ciudad: string;
    fechaEmisionPrimerCertificado: string | null;
    fechaVencimientoUltimoCertificado: string | null;
    fechaVencimientoCertificado: string | null;
    numeroDeCertificacion: string;
    usuarioRegistro: string;
    fechaDesde: string | null;
    fechaHasta: string | null;
    idPrAcicloProgAuditoriaNavigation: Praciclosprogauditorium;
}