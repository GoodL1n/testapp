import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  barChartConfig: any;
  lineChartConfig: any;
  pieChartConfig: any;

  constructor() {

  }

  ngOnInit() {
    this.barChartConfig = {

      chartData: [
        {
          data: [2478, 5267, 734, 784, 433],
          label: 'Population (millions)',
          backgroundColor: ["#DAF7A6", "#76D7C4", "#F8C471", "#AED6F1", "#F9E79F"],
          hoverBackgroundColor: ["#DAF7A6", "#76D7C4", "#F8C471", "#AED6F1", "#F9E79F"]
        },

      ],
      chartLabels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      legends: true,
      options: {
        responsive: true,
      }
    };

    this.lineChartConfig = {
      chartData: [
        {data: [85, 72, 78, 75, 77, 75], label: 'Natural Gas (in USD)'},
        {data: [34, 67, 12, 20, 110, 98], label: 'Coal (in USD)'},
        {data: [63, 87, 50, 28, 75.5, 83], label: 'Crude Oil (in USD)'}
      ],
      chartLabels: ['January', 'February', 'March', 'April', 'May', 'June'],
      legends: true,
      options: {
        responsive: true,
        plugins: {
          zoom: {
            // pan: {
            //   enabled: true,
            //   mode: 'xy'
            // },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
              onZoom: function (chart: any) {
                console.log(`I was zoomed!!!`);
              },
            }
          }
        }

      },
      /* handle zoom plugin inside respective chart component
       based on plugin.zoom flag in options
       you can pass any other plugins such as dataLabels in the plugins array
       */
      plugins: []

    };

    this.pieChartConfig = {

      chartData: [
        {
          data: [2478, 5267, 734, 784, 433],
          label: 'Population (millions)',
          backgroundColor: ["#DAF7A6", "#76D7C4", "#F8C471", "#AED6F1", "#F9E79F"],
          hoverBackgroundColor: ["#DAF7A6", "#76D7C4", "#F8C471", "#AED6F1", "#F9E79F"]
        },

      ],
      chartLabels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      legends: true,
      options: {
        responsive: true,
      }
    };
  }
}
