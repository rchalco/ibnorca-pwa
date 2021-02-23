import { TcsListSystemsComponent } from './tcs-list-systems/tcs-list-systems.component';
import { TcpListProductsComponent } from './tcp-list-products/tcp-list-products.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageErrorComponent } from "./message-error/message-error.component";
import { IonicModule } from "@ionic/angular";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrMaskerModule } from "br-mask";
import { CustomHeaderComponent } from "./custom-header/custom-header.component";
import { MesesComponent } from './meses/meses.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListaVerificacionAperturaComponent } from './lista-verificacion-apertura/lista-verificacion-apertura.component';
import { RegistroCicloComponent } from './registro-ciclo/registro-ciclo.component';
import { PlanAuditoriaComponent } from './plan-auditoria/plan-auditoria.component';

@NgModule({
  declarations: [MessageErrorComponent, CustomInputComponent, CustomHeaderComponent, TcpListProductsComponent, TcsListSystemsComponent, MesesComponent, ProductDetailComponent, ListaVerificacionAperturaComponent, PlanAuditoriaComponent, RegistroCicloComponent], 
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, BrMaskerModule],
  exports: [MessageErrorComponent, CustomInputComponent, CustomHeaderComponent, CustomHeaderComponent, TcpListProductsComponent, TcsListSystemsComponent, MesesComponent, ProductDetailComponent, ListaVerificacionAperturaComponent, PlanAuditoriaComponent, RegistroCicloComponent],   
})
export class ComponentsModule {}
