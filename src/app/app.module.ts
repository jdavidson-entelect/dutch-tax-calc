import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SalaryPickerComponent } from './salary-picker/salary-picker.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CalculationResultsComponent } from './calculation-results/calculation-results.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NoCommaPipe } from './shared/no-comma.pipe';
import { NgChartsModule } from 'ng2-charts';
import { ResultChartComponent } from './result-chart/result-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyInputComponent,
    DatePickerComponent,
    SalaryPickerComponent,
    CalculationResultsComponent,
    NoCommaPipe,
    ResultChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
