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
<<<<<<< HEAD
import { RegistroCicloComponent } from './registro-ciclo/registro-ciclo.component';

@NgModule({
  declarations: [MessageErrorComponent, CustomInputComponent, CustomHeaderComponent, TcpListProductsComponent, TcsListSystemsComponent, MesesComponent, ProductDetailComponent, ListaVerificacionAperturaComponent, RegistroCicloComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, BrMaskerModule],
  exports: [MessageErrorComponent, CustomInputComponent, CustomHeaderComponent, CustomHeaderComponent, TcpListProductsComponent, TcsListSystemsComponent, MesesComponent, ProductDetailComponent, ListaVerificacionAperturaComponent, RegistroCicloComponent],    
=======
import { PlanAuditoriaComponent } from './plan-auditoria/plan-auditoria.component';

@NgModule({
  declarations: [MessageErrorComponent, CustomInputComponent, CustomHeaderComponent, TcpListProductsComponent, TcsListSystemsComponent, MesesComponent, ProductDetailComponent, ListaVerificacionAperturaComponent, PlanAuditoriaComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, BrMaskerModule],
  exports: [MessageErrorComponent, CustomInputComponent, CustomHeaderComponent, CustomHeaderComponent, TcpListProductsComponent, TcsListSystemsComponent, MesesComponent, ProductDetailComponent, ListaVerificacionAperturaComponent, PlanAuditoriaComponent],   
>>>>>>> 31d736226d2c6072d5d584019c8c7fca52c65e12
})
export class ComponentsModule {}
