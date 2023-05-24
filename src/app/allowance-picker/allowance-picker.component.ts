import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-allowance-picker',
  templateUrl: './allowance-picker.component.html',
  styleUrls: ['./allowance-picker.component.css']
})
export class AllowancePickerComponent {

  @Output() allowanceValueUpdatedEvent = new EventEmitter<number>();

  updateAllowanceValueEvent(value: number) {
    this.allowanceValueUpdatedEvent.emit(value);
    console.log('Salary value updated: ' + value);
  }

}
