import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule,NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignatureFieldComponent } from './signature-field/signature-field.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators }  from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SignatureFieldComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SignaturePadModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
