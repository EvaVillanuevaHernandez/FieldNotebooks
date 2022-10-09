import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-anotations',
    pathMatch: 'full'
  },
  {
    path: 'add-anotation',
    loadChildren: () => import('./add-anotation/add-anotation.module').then( m => m.AddAnotationPageModule)
  },
  {
    path: 'list-anotations',
    loadChildren: () => import('./list-anotations/list-anotations.module').then( m => m.ListAnotationsPageModule)
  },
  {
    path: 'update-anotation',
    loadChildren: () => import('./update-anotation/update-anotation.module').then( m => m.UpdateAnotationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
