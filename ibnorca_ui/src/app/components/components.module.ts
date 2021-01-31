import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageErrorComponent } from "./message-error/message-error.component";
import { IonicModule } from "@ionic/angular";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrMaskerModule } from "br-mask";

@NgModule({
  declarations: [MessageErrorComponent, CustomInputComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, BrMaskerModule],
  exports: [MessageErrorComponent, CustomInputComponent], 
})
export class ComponentsModule {}
