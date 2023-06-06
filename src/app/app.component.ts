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
  addHolidayAllowance: boolean = false
  holidayAllowanceMontly: boolean = false
  addThirtyRuling: boolean = false

  @ViewChild('stepper', { static: true }) stepper: MatStepper | undefined;

  dateFormGroup = this._formBuilder.group({
    dateCtrl: ['', Validators.required],
  });
  salaryFormGroup = this._formBuilder.group({
    salaryCtrl: ['', Validators.required],
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

  updateHolidayAllowanceMontly(value: boolean) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { holidayMonthly: value }, 
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    this.holidayAllowanceMontly = value
  }


  constructor(private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    var params = new URLSearchParams(window.location.search)
    console.log(params)

    this.salary = params.has('salary') ? Number(params.get('salary')) ?? 0 : 0;
    this.addHolidayAllowance = params.get('addHoliday') === 'true'
    this.holidayAllowanceMontly = params.get('holidayMonthly') === 'true'
    this.addThirtyRuling = params.get('thirty') === 'true'

    const showResults = params.get('showResults') === 'true'
    console.log("Jumping to end: ", showResults)

    if (showResults && this.stepper) {
      console.log(this.stepper)
      this.stepper.selectedIndex = 2
    }
  }

  
}
