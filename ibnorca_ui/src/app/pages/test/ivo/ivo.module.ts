import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvoPageRoutingModule } from './ivo-routing.module';

import { IvoPage } from './ivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvoPageRoutingModule
  ],
  declarations: [IvoPage]
})
export class IvoPageModule {}
