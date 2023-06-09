import {Component, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDate: string = ""
  salary: number = 0
  pensionContribution: number = 0
  addHolidayAllowance: boolean = false
  holidayAllowanceMonthly: boolean = false
  addThirtyRuling: boolean = false

  @ViewChild('stepper', { static: true }) stepper: MatStepper | undefined;

  dateFormGroup = this._formBuilder.group({
    dateCtrl: ['', Validators.required],
  });
  salaryFormGroup = this._formBuilder.group({
    salaryCtrl: ['', Validators.required],
  });
  pensionFormGroup = this._formBuilder.group({
    pensionCtrl: ['', Validators.required],
  });
  allowanceFormGroup = this._formBuilder.group({
    allowanceCtrl: ['', Validators.required],
  });

  updateDate(value: string) { 
    this.selectedDate = value;
  }

  updateSalaryValue(value: number) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { salary: value, showResults: true }, 
        queryParamsHandling: 'merge', 
        replaceUrl: true,
      });
    this.salary = value;
  }

  updatePensionValue(value: number) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { pensionContribution: value, showResults: true }, 
        queryParamsHandling: 'merge', 
        replaceUrl: true,
      });
    this.pensionContribution = value;
  }

  updateAddHolidayAllowance(value: boolean) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams:  { addHoliday: value }, 
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    this.addHolidayAllowance = value;
  }

  updateThirtyRulingEvent(value: boolean) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { thirty: value }, 
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    this.addThirtyRuling = value;
  }

  updateHolidayAllowanceMonthly(value: boolean) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { holidayMonthly: value }, 
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    this.holidayAllowanceMonthly = value
  }


  constructor(private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    var params = new URLSearchParams(window.location.search)

    this.salary = params.has('salary') ? Number(params.get('salary')) ?? 0 : 0;
    this.addHolidayAllowance = params.get('addHoliday') === 'true'
    this.holidayAllowanceMonthly = params.get('holidayMonthly') === 'true'
    this.addThirtyRuling = params.get('thirty') === 'true'
    this.pensionContribution = params.has('pensionContribution') ? Number(params.get('pensionContribution')) ?? 0 : 0;
    
    const showResults = params.get('showResults') === 'true'

    if (showResults && this.stepper) {
      this.stepper.selectedIndex = 3
    }
  }

  
}
