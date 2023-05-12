import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-salary-picker',
  templateUrl: './salary-picker.component.html',
  styleUrls: ['./salary-picker.component.css']
})
export class SalaryPickerComponent {

  amountCtrl = new FormControl(null, { updateOn: 'blur' });
}
