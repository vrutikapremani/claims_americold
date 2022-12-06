import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';
import { ClaimsApiService } from 'src/app/claims-api.service';

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
    { backgroundColor: ['#36A2EB', '#4BC0C0', '#FF6484', '#13FFFF', '#64FF16','#36A2EB', '#4BC0C0', '#FF6484', '#13FFFF', '#64FF16','#36A2EB', '#4BC0C0', '#FF6484', '#13FFFF', '#64FF16','#36A2EB', '#4BC0C0', '#FF6484', '#13FFFF', '#64FF16'] },
  ];
  constructor(private http:ClaimsApiService) { }

  ngOnInit(): void {
    this.http.getClaims().subscribe((data:any)=>{
     let amount:any =[];
      data.forEach((claim:any)=>{
        this.barChartLabels.push(claim.facilityId);
        amount.push(Math.floor(Number(claim.claimedAmount.toString().replace(',',''))));
      })
      amount.sort((a:number,b:number)=>{
        return b-a}).forEach((item:number)=>{
        this.barChartData[0].data.push(item);

      });

      this.barChartLabels = this.barChartLabels.slice(0,5);
    })
  }

}
