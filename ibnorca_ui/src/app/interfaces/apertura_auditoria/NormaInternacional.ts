export class NormaInternacional {
    idNorma: string;
    idEntidad: string;
    nombreEntidad: string;
    codigoNorma: string;
    nombreNorma: string;
    alcance: any;
    fechaVigencia: string;
    vigente: string;
    fechaRegistro: any;
    idTipo: string;
    descripcionTipo: string;
}

export class ResponseBuscarNormaIntxCodigo {
    estado: boolean;
    mensaje: string;
    total: number;
    resultado: NormaInternacional[];
}