import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageErrorComponent } from "./message-error/message-error.component";
import { IonicModule } from "@ionic/angular";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrMaskerModule } from "br-mask";
import { CustomHeaderComponent } from "./custom-header/custom-header.component";

@NgModule({
  declarations: [MessageErrorComponent, CustomInputComponent, CustomHeaderComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, BrMaskerModule],
  exports: [MessageErrorComponent, CustomInputComponent, CustomHeaderComponent, CustomHeaderComponent], 
})
export class ComponentsModule {}
