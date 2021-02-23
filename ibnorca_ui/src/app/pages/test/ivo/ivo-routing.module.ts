import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvoPage } from './ivo.page';

const routes: Routes = [
  {
    path: '',
    component: IvoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvoPageRoutingModule {}
