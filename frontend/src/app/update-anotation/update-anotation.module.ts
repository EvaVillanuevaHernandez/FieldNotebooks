import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAnotationPageRoutingModule } from './update-anotation-routing.module';

import { UpdateAnotationPage } from './update-anotation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAnotationPageRoutingModule
  ],
  declarations: [UpdateAnotationPage]
})
export class UpdateAnotationPageModule {}
