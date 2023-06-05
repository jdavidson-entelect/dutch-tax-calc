import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent {
  @Output() valueUpdatedEvent = new EventEmitter<number>();
  amountCtrl = new FormControl(0.0, { updateOn: 'blur' });

  updateValue(updatedVlue: Event) {
      this.valueUpdatedEvent.emit(parseInt((updatedVlue.target as HTMLInputElement).value))
      console.log(parseInt((updatedVlue.target as HTMLInputElement).value))
  }

  ngOnInit() {
    var params = new URLSearchParams(window.location.search)
    const salary = params.has('salary') ? Number(params.get('salary')) : null
    console.log("SALARY: ", salary)

    if (salary) {
      this.amountCtrl.setValue(salary)
    }
  }
}