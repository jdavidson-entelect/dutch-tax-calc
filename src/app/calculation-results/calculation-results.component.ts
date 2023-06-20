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
  @Input() annualPensionContribution: number = 0;
  @Input() addHolidayAllowance: boolean = false;
  @Input() holidayAllowanceMonthly: boolean = false;
  @Input() addThirtyRuling: boolean = false;

  holidayAllowanceAmount: number = 0;
  netMonth: number = 0;
  adjustedSalary: number = 0;
  adjustedHolidayAllowance: number = 0;

  paycheck: any;

  ngOnChanges() {
    this.adjustedSalary = this.annualSalary - this.annualPensionContribution

    if (this.addHolidayAllowance) { 
      this.holidayAllowanceAmount =  this.roundNumber(this.annualSalary * (0.08), 2)
      this.adjustedSalary = this.holidayAllowanceAmount + this.annualSalary
    } 

    this.paycheck = new SalaryPaycheck({
      income: this.adjustedSalary,
      allowance: false,
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

    
    this.adjustedHolidayAllowance = this.roundNumber(this.paycheck.netYear*(1/13),2)

    if (this.holidayAllowanceMonthly) {
      this.netMonth = this.paycheck.netMonth;
    } else {
      this.netMonth = this.roundNumber((this.paycheck.netYear-this.adjustedHolidayAllowance)/12, 2);
    }
    this.paycheck.netMonth = this.netMonth
    this.paycheck.adjustedHolidayAllowanceYearly = this.adjustedHolidayAllowance
  }

  roundNumber(value: number, places = 2) {
    return Number(value.toFixed(places));
  }

}
