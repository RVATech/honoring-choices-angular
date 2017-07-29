import { Component, ViewChildren, QueryList, ElementRef, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl }  from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignatureFieldComponent } from "./signature-field/signature-field.component";

@NgModule({
  imports: [NgbModule, FormsModule]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  sigform: FormGroup;
  signatureField1: FormControl;
  signatureField2: FormControl;
  firstName: FormControl;
  middleName: FormControl;
  lastName: FormControl;
  dob: FormControl;
  streetAddress: FormControl;
  city: FormControl;
  state: FormControl;
  zip: FormControl;

  @ViewChildren(SignatureFieldComponent) public sigs: QueryList<SignatureFieldComponent>;
  @ViewChildren('sigContainer1') public sigContainer1: QueryList<ElementRef>;
  @ViewChildren('sigContainer2') public sigContainer2: QueryList<ElementRef>;

  constructor(public _fb:FormBuilder) { }
  ngOnInit() {

    this.sigform = this._fb.group({
      signatureField1: ['', Validators.required],
      signatureField2: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob:[],
      streetAddress:[],
      city: [],
      state: [],
      zip: []
    });
  }

  public ngAfterViewInit() {
    this.beResponsive();
    this.setOptions();
  }

  // set the dimensions of the signature pad canvas
  public beResponsive() {
    console.log('Resizing signature pad canvas to suit container size')
    this.size(this.sigContainer1.first, this.sigs.first);
  }

  public size(container: ElementRef, sig: SignatureFieldComponent){
    sig.signaturePad.set('canvasWidth', container.nativeElement.clientWidth);
    sig.signaturePad.set('canvasHeight', container.nativeElement.clientHeight);
  }

  public setOptions() {
    this.sigs.first.signaturePad.set('penColor', 'rgb(0, 0, 0)');
    this.sigs.last.signaturePad.set('penColor', 'rgb(0, 0, 255)');
    this.sigs.last.signaturePad.set('backgroundColor', 'rgb(255, 255, 255)');
    this.sigs.last.signaturePad.clear(); // clearing is needed to set the background colour
  }

  public submit() {
    console.log('CAPTURED SIGS:');
    console.log(this.sigs.first.signature);
    console.log(this.sigs.last.signature);
  }

  public clear() {
    this.sigs.first.clear();
    this.sigs.last.clear();
  }
}
