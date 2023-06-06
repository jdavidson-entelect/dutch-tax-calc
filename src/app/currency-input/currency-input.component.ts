import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent {
  @Output() valueUpdatedEvent = new EventEmitter<number>();
  amountCtrl = new FormControl(0.0, { updateOn: 'blur' });
  monthly = false;
  @Output() salaryIsMonthly = new EventEmitter<number>();


  updateValue(updatedVlue: Event) {
    let val = parseInt((updatedVlue.target as HTMLInputElement).value)
    if (this.monthly) {
      val *= 12
    }
    this.valueUpdatedEvent.emit(val)
  }

  updateMonthly(value: MatCheckboxChange) {
    this.monthly = value.checked
    this.valueUpdatedEvent.emit((this.amountCtrl.value ?? 0) * 12)
  }

  ngOnInit() {
    var params = new URLSearchParams(window.location.search)
    const salary = params.has('salary') ? Number(params.get('salary')) : null
    if (salary) {
      this.amountCtrl.setValue(salary)
    }
  }
}