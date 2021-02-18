import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlanAuditoriaPageRoutingModule } from './plan-auditoria-routing.module';
import { PlanAuditoriaPage } from './plan-auditoria.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PlanAuditoriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlanAuditoriaPage]
})
export class PlanAuditoriaPageModule {}
