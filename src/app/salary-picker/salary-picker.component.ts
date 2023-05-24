import { Component, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-salary-picker',
  templateUrl: './salary-picker.component.html',
  styleUrls: ['./salary-picker.component.css']
})
export class SalaryPickerComponent {
  color: ThemePalette = 'accent';
  thirtyPercentChecked = false;
  thirtyPercentDisabled = false;
  
  vakantiegeldIncludedChecked = false;
  vakantiegeldIncludedDisabled = false;
  
  @Output() salaryValueUpdatedEvent = new EventEmitter<number>();
  @Output() addHolidayAllowanceEvent = new EventEmitter<boolean>();

  updateSalaryValueEvent(value: number) {
    this.salaryValueUpdatedEvent.emit(value);
    console.log('Salary value updated: ' + value);
  }

  updateAddHolidayAllowance(value: MatCheckboxChange) {
    this.addHolidayAllowanceEvent.emit(!value.checked);
  }
}
