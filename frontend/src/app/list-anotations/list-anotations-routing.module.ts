import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAnotationsPage } from './list-anotations.page';

const routes: Routes = [
  {
    path: '',
    component: ListAnotationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAnotationsPageRoutingModule {}
