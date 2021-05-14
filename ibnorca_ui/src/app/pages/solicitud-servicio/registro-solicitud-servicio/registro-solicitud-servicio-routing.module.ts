import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroSolicitudServicioPage } from './registro-solicitud-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroSolicitudServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroSolicitudServicioPageRoutingModule {}
