import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule( {
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
} )
export class MaterialModule { }
