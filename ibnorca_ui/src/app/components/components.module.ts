import { TcsListSystemsComponent } from "./tcs-list-systems/tcs-list-systems.component";
import { TcpListProductsComponent } from "./tcp-list-products/tcp-list-products.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageErrorComponent } from "./message-error/message-error.component";
import { IonicModule } from "@ionic/angular";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrMaskerModule } from "br-mask";
import { CustomHeaderComponent } from "./custom-header/custom-header.component";
import { MesesComponent } from "./meses/meses.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ListaVerificacionAperturaComponent } from "./lista-verificacion-apertura/lista-verificacion-apertura.component";
import { RegistroCicloComponent } from "./registro-ciclo/registro-ciclo.component";
import { PlanAuditoriaComponent } from "./plan-auditoria/plan-auditoria.component";
import { CicloParticipanteComponent } from "./ciclo-participante/ciclo-participante.component";
import { TcsListaVerificacionReunionAperturaComponent } from "./tcs-lista-verificacion-reunion-apertura/tcs-lista-verificacion-reunion-apertura.component";
import { TcsListaVerificacionReunionCierreComponent } from "./tcs-lista-verificacion-reunion-cierre/tcs-lista-verificacion-reunion-cierre.component";
import { PraCronogramaComponent } from "./pra-cronograma/pra-cronograma.component";
import { BuscarNormaComponent } from "./buscar-norma/buscar-norma.component";
import { PraDireccionSistemaComponent } from "./pra-direccion-sistema/pra-direccion-sistema.component";
import { ParamPaisesComponent } from "./param-paises/param-paises.component";
import { PraEditNormaSistemaComponent } from "./pra-edit-norma-sistema/pra-edit-norma-sistema.component";
import { ParamOrganismosCertificadoresComponent } from "./param-organismos-certificadores/param-organismos-certificadores.component";
import { ElaCronogramaComponent } from "./ela-cronograma/ela-cronograma.component";
import { ElaEditHallazagoComponent } from "./ela-edit-hallazago/ela-edit-hallazago.component";
import { ElaRegistroHallazgosComponent } from "./ela-registro-hallazgos/ela-registro-hallazgos.component";
import { ElaObjetivosComponent } from "./ela-objetivos/ela-objetivos.component";
import { ElaRegistroAreapreocupacionComponent } from "./ela-registro-areapreocupacion/ela-registro-areapreocupacion.component";
import { ParamDocumentosComponent } from "./param-documentos/param-documentos.component";
import { ElaCronogramaListComponent } from "./ela-cronograma-list/ela-cronograma-list.component";
import { ElaEditAreapreocupacionComponent } from "./ela-edit-areapreocupacion/ela-edit-areapreocupacion.component";
import { EditorDocumentoComponent } from "./editor-documento/editor-documento.component";
import { TmActaReunionComponent } from "./tm-acta-reunion/tm-acta-reunion.component";

@NgModule({
  declarations: [
    MessageErrorComponent,
    CustomInputComponent,
    CustomHeaderComponent,
    TcpListProductsComponent,
    TcsListSystemsComponent,
    MesesComponent,
    ProductDetailComponent,
    ListaVerificacionAperturaComponent,
    PlanAuditoriaComponent,
    RegistroCicloComponent,
    CicloParticipanteComponent,
    TcsListaVerificacionReunionAperturaComponent,
    TcsListaVerificacionReunionCierreComponent,
    PraCronogramaComponent,
    BuscarNormaComponent,
    PraDireccionSistemaComponent,
    ParamPaisesComponent,
    PraEditNormaSistemaComponent,
    ParamOrganismosCertificadoresComponent,
    ElaCronogramaComponent,
    ElaEditHallazagoComponent,
    ElaRegistroHallazgosComponent,
    ElaObjetivosComponent,
    ElaRegistroAreapreocupacionComponent,
    ParamDocumentosComponent,
    ElaCronogramaListComponent,
    ElaEditAreapreocupacionComponent,
    EditorDocumentoComponent,
    TmActaReunionComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    BrMaskerModule,
  ],
  exports: [
    MessageErrorComponent,
    CustomInputComponent,
    CustomHeaderComponent,
    CustomHeaderComponent,
    TcpListProductsComponent,
    TcsListSystemsComponent,
    MesesComponent,
    ProductDetailComponent,
    ListaVerificacionAperturaComponent,
    PlanAuditoriaComponent,
    RegistroCicloComponent,
    CicloParticipanteComponent,
    TcsListaVerificacionReunionAperturaComponent,
    TcsListaVerificacionReunionCierreComponent,
    PraCronogramaComponent,
    BuscarNormaComponent,
    PraDireccionSistemaComponent,
    ParamPaisesComponent,
    PraEditNormaSistemaComponent,
    ParamOrganismosCertificadoresComponent,
    ElaCronogramaComponent,
    ElaEditHallazagoComponent,
    ElaRegistroHallazgosComponent,
    ElaObjetivosComponent,
    ElaRegistroAreapreocupacionComponent,
    ParamDocumentosComponent,
    ElaCronogramaListComponent,
    ElaEditAreapreocupacionComponent,
    EditorDocumentoComponent,
    TmActaReunionComponent,
  ],
})
export class ComponentsModule {}
