import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectFormGridPageComponent } from './select-form-grid-page/select-form-grid-page.component';
import { SelectFormControlsPageComponent } from './select-form-controls-page/select-form-controls-page.component';
import { FormPageComponent } from './form-page/form-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'select-form-grid',
        component: SelectFormGridPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'select-form-controls',
        component: SelectFormControlsPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'form',
        component: FormPageComponent,
        pathMatch: 'full'
      },
    ]
  }
]


@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
} )

export class PagesRoutingModule { }
