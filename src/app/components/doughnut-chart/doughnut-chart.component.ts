import { Component, OnInit, Input } from '@angular/core';
import { Color, Label, SingleDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  @Input() claimData: any[] = [];
  public doughnutChartLabels: any[] = [];
  public doughnutChartData: any[] = [];
  public doughnutChartType: any = 'doughnut';
  public doughnutOptions: any = {
    segmentShowStroke: false,
    animateScale: true,
    centerText: {
      display: true,
      text: "280"
    },
    legend: {
      position: 'right'
    }
  };
  public doughnutChartColor: Color[] = [
    { backgroundColor: ['#FF9021', '#4BC0C0', '#36A2EB', '#FF6484', '#13FFFF', '#64FF16', '#FFA3B5', '#FFC898', '#FFE0A1', '#A0D0F5', '#9966FF'] },
  ];
  constructor() { }

  ngOnInit(): void {
    let values = Object.entries(this.claimData);
    values.forEach((status: any) => {
      this.doughnutChartLabels.push(status[0] + ' - ' + status[1]);
      this.doughnutChartData.push(status[1]);
    })
  }

}
