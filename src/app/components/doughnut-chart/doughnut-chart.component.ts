import { Component, OnInit } from '@angular/core';
import {Color, Label,SingleDataSet, PluginServiceGlobalRegistrationAndOptions} from 'ng2-charts';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  public doughnutChartLabels: any = ['Approved and closed', 'Pending approval', 'New', 'Abandoned'];
  public doughnutChartData: any = [35, 35, 22, 18];
  public doughnutChartType: any = 'doughnut';
  public doughnutOptions: any = {
    segmentShowStroke : false,
    animateScale : true,
    centerText: {
      display: true,
      text: "280"
  }
};
public doughnutChartColor: Color[] = [
  {backgroundColor: ['#FF9021', '#4BC0C0', '#36A2EB', '#FF6484']},
];
  constructor() { }

  ngOnInit(): void {
  }

}
