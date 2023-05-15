import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-salary-picker',
  templateUrl: './salary-picker.component.html',
  styleUrls: ['./salary-picker.component.css']
})
export class SalaryPickerComponent {
  color: ThemePalette = 'accent';
  thirtyPercentChecked = false;
  thirtyPercentDisabled = false;
  
  vakantiegeldIncludedChecked = false;
  vakantiegeldIncludedDisabled = false;
}
