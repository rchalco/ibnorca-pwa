import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MykePageRoutingModule } from './myke-routing.module';

import { MykePage } from './myke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MykePageRoutingModule
  ],
  declarations: [MykePage]
})
export class MykePageModule {}
