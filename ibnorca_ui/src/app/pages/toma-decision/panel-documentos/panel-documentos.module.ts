import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelDocumentosPageRoutingModule } from './panel-documentos-routing.module';

import { PanelDocumentosPage } from './panel-documentos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelDocumentosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PanelDocumentosPage]
})
export class PanelDocumentosPageModule {}
