import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroSolicitudServicioPageRoutingModule } from './registro-solicitud-servicio-routing.module';

import { RegistroSolicitudServicioPage } from './registro-solicitud-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroSolicitudServicioPageRoutingModule
  ],
  declarations: [RegistroSolicitudServicioPage]
})
export class RegistroSolicitudServicioPageModule {}
