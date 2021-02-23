import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RubenPageRoutingModule } from './ruben-routing.module';

import { RubenPage } from './ruben.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RubenPageRoutingModule
  ],
  declarations: [RubenPage]
})
export class RubenPageModule {}
