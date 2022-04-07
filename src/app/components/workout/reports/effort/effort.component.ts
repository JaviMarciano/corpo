import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, LinearScale, LineController, LineElement, PointElement, registerables, Title } from 'chart.js';

@Component({
  selector: 'app-effort',
  templateUrl: './effort.component.html',
  styleUrls: ['./effort.component.scss'],
})
export class EffortComponent implements AfterViewInit {

  @ViewChild('barCanvas1') barCanvas1;
  @ViewChild('barCanvas2') barCanvas2;
  @ViewChild('barCanvas3') barCanvas3;
  @ViewChild('barCanvas4') barCanvas4;


  barChart: any;
  lineChart: any;
  constructor() {
    Chart.register(...registerables);
    //Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

  }

  lineChartMethod() {/*
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        datasets: [
          {
            label: 'esfuerzo',
            fill: false,
            //lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [5, 6, 7, 7, 7, 8, 7, 6, 5, 6, 5, 6,7, 6, 7, 8, 7, 8, 7, 9, 10, 6, 8, 8, 9],
            spanGaps: false,
          }
        ]
      }
    });*/
  }



  barChartMethod(canvas: ElementRef, data) {
    this.barChart = new Chart(canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Dom', 'Lun', 'Mart', 'Mier', 'Jue', 'Vie', 'Sab'],
        datasets: [{
          label: 'esfuerzo',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(115, 132, 154, 0.3)',
            'rgba(255, 159, 64, 0.3)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(115, 132, 154, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {

        }
      }
    });
  }


  ngAfterViewInit() {
    // this.lineChartMethod()
    this.barChartMethod(this.barCanvas1, [0, 7, 9, 9, 7, 8, 0]);
    this.barChartMethod(this.barCanvas2, [0, 8, 6, 9, 7, 8, 0]);
    this.barChartMethod(this.barCanvas3, [0, 8, 10, 9, 6, 8, 0]);
    this.barChartMethod(this.barCanvas4, [0, 10, 6, 9, 7, 10, 0]);
  }

}
