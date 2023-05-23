import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent {
  amountCtrl = new FormControl(null, { updateOn: 'blur' });

  @Output() valueUpdatedEvent = new EventEmitter<number>();

  updateValue(updatedVlue: Event) {
      this.valueUpdatedEvent.emit(parseInt((updatedVlue.target as HTMLInputElement).value))
      // console.log(parseInt((updatedVlue.target as HTMLInputElement).value))
  }
}