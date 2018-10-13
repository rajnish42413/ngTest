import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,

} from '@angular/material';

@NgModule({
  imports : [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatGridListModule

  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatGridListModule
  ]
})


export class MaterialModule {}
