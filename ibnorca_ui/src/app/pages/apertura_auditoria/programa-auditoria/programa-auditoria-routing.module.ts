import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaAuditoriaPage } from './programa-auditoria.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaAuditoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaAuditoriaPageRoutingModule {}
