import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { SalaryPaycheck } from 'dutch-tax-income-calculator';

@Component({
  selector: 'app-result-chart',
  templateUrl: './result-chart.component.html',
  styleUrls: ['./result-chart.component.css']
})
export class ResultChartComponent {

  @Input() calculationResuls: SalaryPaycheck | null = null

  // Doughnut
  public doughnutChartLabels: string[][] | undefined = undefined
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] & Array<{labels: string[]}> = []

    public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
      responsive: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              var index = context.dataIndex;
              //@ts-ignore
              return (context.dataset.labels[index] ?? context.dataset.label) + ": " + context.formattedValue;
            }
          }
        }
      }
    };

    constructor() {
      this.setDoughnutValues()
    }

    ngOnChanges() {
      this.setDoughnutValues()
    }

    setDoughnutValues() {

      this.doughnutChartDatasets = [
        {
          //@ts-ignore
          data: [this.calculationResuls?.grossMonth ?? 200, this.calculationResuls?.adjustedHolidayAllowanceYearly/12 ?? 100],
          label: 'Remuneration',
          backgroundColor: [
            'rgb(255, 155, 0)', // dutch orange
            'rgb(54, 162, 235)', // blue
            'rgb(34,139,34)', //fgreen
            'rgb(255, 205, 86)' //yellow
          ],
          //@ts-ignore
          labels: ['Gross Salary Monthly', 'Holiday Pay Monthly']
        },
          {
            data: [this.calculationResuls?.netMonth ?? 200, this.calculationResuls?.incomeTaxMonth ?? 100],
            label: 'Net Take home',
            backgroundColor: [
              'rgb(54, 162, 235)', // blue
              'rgb(255, 99, 132)', //red
            ],
            //@ts-ignore
            labels: ['Net Take Home Monthly', 'Monthly Tax']
          },
        ]
    }
}

