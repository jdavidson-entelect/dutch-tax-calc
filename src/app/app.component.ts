import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDate: string = ""
  salary: number = 0
  addHolidayAllowance: boolean = false

  dateFormGroup = this._formBuilder.group({
    dateCtrl: ['', Validators.required],
  });
  salaryFormGroup = this._formBuilder.group({
    salaryCtrl: ['', Validators.required],
  });
  allowanceFormGroup = this._formBuilder.group({
    allowanceCtrl: ['', Validators.required],
  });

  updateDate(value: string) { 
    this.selectedDate = value;
  }

  updateSalaryValue(value: number) {
    console.log('updateSalaryValue: ', value);
    this.salary = value;
  }

  updateAddHolidayAllowance(value: boolean) {
    this.addHolidayAllowance = value;
  }

  // updateAllowanceValue(value: number) {
  //   console.log('updateAllowanceValue: ', value);
  //   this.allowance = value;
  // }


  constructor(private _formBuilder: FormBuilder) {}
}
