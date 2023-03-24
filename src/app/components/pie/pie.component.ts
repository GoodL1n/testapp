import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions} from "chart.js";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit{
  @Input() chartData!: any;
  @Input() chartLabels!: Array<any>;
  @Input() chartOptions!: ChartOptions;
  @Input() chartLegends!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
