export class ListaDireccion {
    codigo: string;
    cod_simulacionservicio: string;
    nombre: string;
    direccion: string;
    cod_tipoatributo: string;
    habilitado: string;
    marca: string;
    norma: string;
    nro_sello: string;
    cod_ciudad: string;
    ciudad: string;
    cod_estado: string;
    estado: string;
    cod_pais: string;
    pais: string;
}

export class ListaProducto {
    codigo: string;
    cod_simulacionservicio: string;
    nombre: string;
    direccion: string;
    cod_tipoatributo: string;
    habilitado: string;
    marca: string;
    norma: string;
    nro_sello: string;
    cod_ciudad: string;
    ciudad: string;
    cod_estado: string;
    estado: string;
    cod_pais: string;
    pais: string;
}

export class DatosServicio {
    idServicio: string;
    idPropuesta: string;
    fecharegistro: string;
    idOficina: string;
    oficina: string;
    idCliente: string;
    codigo: string;
    idArea: string;
    area: string;
    alcance_propuesta: string;
    descripcion_servicio: string;
    cod_responsable: string;
    responsable: string;
    cod_iaf_primario: string;
    cod_iaf_secundario: string;
    listaProducto: ListaProducto[];
    listaDireccion: ListaDireccion[];
}