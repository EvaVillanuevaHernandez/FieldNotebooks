import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnotationPage } from './add-anotation.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnotationPageRoutingModule {}
