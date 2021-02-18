import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EdicionTcpProductDetailPageRoutingModule } from './edicion-tcp-product-detail-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EdicionTcpProductDetailPage } from './edicion-tcp-product-detail.page';
import { ComponentsModule } from './../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EdicionTcpProductDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EdicionTcpProductDetailPage]
})
export class EdicionTcpProductDetailPageModule {}
