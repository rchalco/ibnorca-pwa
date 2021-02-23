import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MykePage } from './myke.page';

const routes: Routes = [
  {
    path: '',
    component: MykePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MykePageRoutingModule {}
