import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterElaboracionAuditoriaPage } from './master-elaboracion-auditoria.page';

const routes: Routes = [
  {
    path: '',
    component: MasterElaboracionAuditoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterElaboracionAuditoriaPageRoutingModule {}
