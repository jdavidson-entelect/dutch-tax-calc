import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-pension-picker',
  templateUrl: './pension-picker.component.html',
  styleUrls: ['./pension-picker.component.css']
})
export class PensionPickerComponent {

  @Output() pensionValueUpdatedEvent = new EventEmitter<number>();
  @Input() annualSalary: number = 0

  monthly = false
  percentageValueChecked = false

  pensionAnnualValue = 0

  updatePensionValueEvent(value: number) {
    this.pensionValueUpdatedEvent.emit(value);
  }

  updatePercentageValueChecked(value: MatCheckboxChange) {
    this.percentageValueChecked = value.checked
    if (value.checked) {
      this.monthly = false
    }
  }

  updatePercentageValue(updatedVlue: Event) {
    let val = parseInt((updatedVlue.target as HTMLInputElement).value)
    this.pensionAnnualValue = this.annualSalary*val/100
    this.pensionValueUpdatedEvent.emit(this.pensionAnnualValue)
  }

}
