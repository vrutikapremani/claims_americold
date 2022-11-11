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
  @Input() claimData: any[] = [];
  @Input() barchartColor: any;
  @Input() barSize: any;
  public openClaims: any[] = [];
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
            min: 0
          }
        }
      ]
    }
  };

  public barChartData: any = [
    { data: [] }
  ];

  public barChartLabels: any = [];

  public barChartType: ChartType = 'bar';

  public barChartLegends = false;

  public barChartColor: Color[] = [
    { backgroundColor: ['#36A2EB', '#4BC0C0', '#FF6484', '#13FFFF', '#64FF16', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB'] },
  ];
  constructor() { }

  ngOnInit(): void {
    this.claimData.forEach((claim: any) => {
      this.barChartLabels.push(claim.masterAcct);
      this.barChartData[0].data.push(claim.claimedAmount);
    })
  }

}
