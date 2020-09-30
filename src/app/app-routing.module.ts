import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'form-creator',
    redirectTo: 'form-creator/select-form-grid',
    pathMatch: 'full'
  },
  {
    path: 'form-creator',
    loadChildren: () => import( './pages/pages.module' ).then( m => m.PagesModule )
  },
  {
    path: '',
    redirectTo: 'form-creator/select-form-grid',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'form-creator/select-form-grid'
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
