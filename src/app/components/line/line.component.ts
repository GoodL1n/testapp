import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions} from "chart.js";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() chartData!: any;
  @Input() chartLabels!: Array<any>;
  @Input() chartOptions!: ChartOptions;
  @Input() chartLegends!: boolean;
  @Input() chartPlugins!: any[];

  constructor() { }

  ngOnInit(): void {
    console.log('Line Chart initialized!!!');
  }
}
