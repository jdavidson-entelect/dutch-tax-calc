import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateFormGroup = this._formBuilder.group({
    dateCtrl: ['', Validators.required],
  });
  salaryFormGroup = this._formBuilder.group({
    salaryCtrl: ['', Validators.required],
  });
  allowanceFormGroup = this._formBuilder.group({
    allowanceCtrl: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder) {}
}
