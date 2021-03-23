import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProgramaAuditoriaPageRoutingModule } from './programa-auditoria-routing.module';
import { BrMaskerModule } from 'br-mask';
import { ProgramaAuditoriaPage } from './programa-auditoria.page';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    ReactiveFormsModule,
    ProgramaAuditoriaPageRoutingModule,
    BrMaskerModule,
    ComponentsModule
  ],
  declarations: [ProgramaAuditoriaPage]
})
export class ProgramaAuditoriaPageModule {}
