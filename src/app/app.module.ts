import { AuthService } from './auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';




@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [AuthService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
