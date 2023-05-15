import { Component } from '@angular/core';
import { constants } from 'dutch-tax-income-calculator';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  availableYears = constants.years.reverse()
  selected =  this.availableYears[0]
}
