import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvoPageRoutingModule } from './ivo-routing.module';

import { IvoPage } from './ivo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [IvoPage]
})
export class IvoPageModule {}
