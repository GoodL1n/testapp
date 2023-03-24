import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from "../../services/http-service.service";
import {CountCities} from "../../helpers/shared";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  barChartConfig: any;
  lineChartConfig: any;
  pieChartConfig: any;

  public countCities : CountCities[] = [];

  count: {} | any;
  nameCountries: {} | any;

  constructor(private http: HttpServiceService) {

  }

  ngOnInit() {
    this.http.getCountCities().subscribe(x => {
      this.countCities = x
      this.count = this.countCities.map(y => {
        return y.count;
      })
      this.nameCountries = this.countCities.map(y => {
        return y.country;
      })
    })
  }

  func(){
    this.barChartConfig = {

      chartData: [
        {
          data: this.count,
          label: ' ',
          backgroundColor: ["#DAF7A6", "#76D7C4", "#F8C471", "#AED6F1", "#F9E79F"],
          hoverBackgroundColor: ["#DAF7A6", "#76D7C4", "#F8C471", "#AED6F1", "#F9E79F"]
        },

      ],
      chartLabels: this.nameCountries,
      legends: true,
      options: {
        responsive: true,
      }
    };

    this.lineChartConfig = {
      chartData: [
        {data: this.count, label: ' '},
      ],
      chartLabels: this.nameCountries,
      legends: true,
      options: {
        responsive: true,
      }
    };

    this.pieChartConfig = {

      chartData: [
        {
          data: this.count,
          label: ' ',
          backgroundColor: ["#DAF7A6", "#76D7C4", "#F8C471", "#AED6F1", "#F9E79F"],
          hoverBackgroundColor: ["#DAF7A6", "#76D7C4", "#F8C471", "#AED6F1", "#F9E79F"]
        },

      ],
      chartLabels: this.nameCountries,
      legends: true,
      options: {
        responsive: true,
      }
    };
  }

}
