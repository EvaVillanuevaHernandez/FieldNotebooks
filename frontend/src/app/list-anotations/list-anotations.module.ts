import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAnotationsPageRoutingModule } from './list-anotations-routing.module';

import { ListAnotationsPage } from './list-anotations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAnotationsPageRoutingModule
  ],
  declarations: [ListAnotationsPage]
})
export class ListAnotationsPageModule {}
