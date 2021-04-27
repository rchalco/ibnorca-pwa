import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelDocumentosPage } from './panel-documentos.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PanelDocumentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelDocumentosPageRoutingModule {}
