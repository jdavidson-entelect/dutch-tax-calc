import { Component } from '@angular/core';
import { constants } from 'dutch-tax-income-calculator';
import { Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  availableYears = constants.years.reverse()
  selected =  this.availableYears[0]

  @Output() dateSelectedEvent = new EventEmitter<string>();

  ngOnInit() {
    this.dateSelectedEvent.emit(this.selected)
  }

  updateSelectedDate(value: MatSelectChange) {
    this.dateSelectedEvent.emit(value.value);
  }
}
