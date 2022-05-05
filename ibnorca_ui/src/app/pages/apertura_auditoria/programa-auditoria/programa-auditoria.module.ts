import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProgramaAuditoriaPageRoutingModule } from './programa-auditoria-routing.module';
import { ProgramaAuditoriaPage } from './programa-auditoria.page';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProgramaAuditoriaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ProgramaAuditoriaPage],
})
export class ProgramaAuditoriaPageModule {}
