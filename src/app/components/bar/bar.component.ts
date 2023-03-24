import {Component, Input, OnInit} from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit{
  @Input() chartData!: any;
  @Input() chartLabels!: Array<any>;
  @Input() chartOptions: ChartConfiguration['options'];
  @Input() chartLegends!: boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(this.chartData)
  }
}
