import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() rowData: any[] = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    // maintainAspectRatio: false,
    animation: {
      animateScale: true
    },
    scales: {
      xAxes: [
        {
          stacked: false,
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          stacked: false,
          ticks: {
            min: 0,
            stepSize: 2,
            max: 100
          }
        }
      ]
    }
  };

  public barChartData = [
    { data: [10, 30, 40, 50, 20, 30, 20, 10, 40, 30, 60, 70] }
  ];

  public barChartLabels: any = ['Jan', 'Feb', 'Mar', 'Apr', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public barChartType: ChartType = 'bar';

  public barChartLegends = false;

  public barChartColor: Color[] = [
    { backgroundColor: ['#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB'] },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
