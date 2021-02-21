import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterElaboracionAuditoriaPageRoutingModule } from './master-elaboracion-auditoria-routing.module';

import { MasterElaboracionAuditoriaPage } from './master-elaboracion-auditoria.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasterElaboracionAuditoriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MasterElaboracionAuditoriaPage]
})
export class MasterElaboracionAuditoriaPageModule {}
