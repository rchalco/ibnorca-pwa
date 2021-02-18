import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicionTcpProductDetailPage } from './edicion-tcp-product-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EdicionTcpProductDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicionTcpProductDetailPageRoutingModule {}
