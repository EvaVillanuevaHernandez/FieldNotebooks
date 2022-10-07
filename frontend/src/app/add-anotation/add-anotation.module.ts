import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnotationPageRoutingModule } from './add-anotation-routing.module';

import { AddAnotationPage } from './add-anotation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddAnotationPageRoutingModule
  ],
  declarations: [AddAnotationPage]
})
export class AddAnotationPageModule {}
