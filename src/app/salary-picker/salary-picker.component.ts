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
  
  vakantiegeldMonthlyChecked = false;
  vakantiegeldMonthlyDisabled = false;
  
  @Output() salaryValueUpdatedEvent = new EventEmitter<number>();
  @Output() addHolidayAllowanceEvent = new EventEmitter<boolean>();
  @Output() holidayAllowanceMonthlyEvent = new EventEmitter<boolean>();
  @Output() applyThirtyRulingEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.addHolidayAllowanceEvent.emit(!this.vakantiegeldIncludedChecked)
    this.applyThirtyRulingEvent.emit(this.thirtyPercentChecked)

    // Check Query Params
    var params = new URLSearchParams(window.location.search)

    const addHolidayAllowance = params.get('addHoliday') === 'true'
    const holidayAllowanceMontly = params.get('holidayMonthly') === 'true'
    const addThirtyRuling = params.get('thirty') === 'true'

    this.vakantiegeldIncludedChecked=addHolidayAllowance
    this.vakantiegeldMonthlyChecked=holidayAllowanceMontly
    this.thirtyPercentChecked=addThirtyRuling
  }

  updateSalaryValueEvent(value: number) {
    this.salaryValueUpdatedEvent.emit(value);
    console.log('Salary value updated: ' + value);
  }

  updateAddHolidayAllowance(value: MatCheckboxChange) {
    this.addHolidayAllowanceEvent.emit(!value.checked);
    console.log('Holiday allowance updated: ' + value.checked);
  }

  updateApplyThirtyRuling(value: MatCheckboxChange) {
    this.applyThirtyRulingEvent.emit(value.checked);
  }

  updatHolidayAllowanceMonthly(value: MatCheckboxChange) {
    this.holidayAllowanceMonthlyEvent.emit(value.checked);
  }
}
