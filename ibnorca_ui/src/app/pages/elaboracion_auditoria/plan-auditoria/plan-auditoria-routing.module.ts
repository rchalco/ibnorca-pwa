import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanAuditoriaPage } from './plan-auditoria.page';

const routes: Routes = [
  {
    path: '',
    component: PlanAuditoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanAuditoriaPageRoutingModule {}
