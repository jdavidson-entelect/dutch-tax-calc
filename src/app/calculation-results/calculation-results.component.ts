import { Component, Input } from '@angular/core';
import { SalaryPaycheck } from 'dutch-tax-income-calculator';

@Component({
  selector: 'app-calculation-results',
  templateUrl: './calculation-results.component.html',
  styleUrls: ['./calculation-results.component.css']
})
export class CalculationResultsComponent {
  @Input() selectedDate = "2023";
  @Input() annualSalary: number = 0;
  @Input() addHolidayAllowance: boolean = true;
  @Input() addThirtyRuling: boolean = false;

  paycheck: any;

  ngOnChanges() {
    this.paycheck = new SalaryPaycheck({
      income: this.annualSalary,
      allowance: this.addHolidayAllowance,
      socialSecurity: true,//, What is this and how does it work?
      older: false,
      hours: 40,
    }, 
    'Year', 
    2023, 
    {
        checked: this.addThirtyRuling,
        choice: "normal", //TODO: We need to add checkboxes to be able to choose the different types
    });
    console.log(this.paycheck);
    console.log(this.addThirtyRuling);
    console.log(this.annualSalary);
  }
}
