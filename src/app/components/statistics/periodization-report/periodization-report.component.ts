import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-periodization-report',
  templateUrl: './periodization-report.component.html',
  styleUrls: ['./periodization-report.component.scss'],
})
export class PeriodizationReportComponent implements OnInit {


  goToGoals() {
    this.router.navigate(['/goals']);
  }
  goToWeek() {
    this.router.navigate(['/wod-goals']);

  }


  barChart: any;
  lineChart: any;
  @ViewChild('barCanvas1') barCanvas1;

  constructor(private router: Router) {
    Chart.register(...registerables);

  }

  ngOnInit() {
    console.log(this.barCanvas1)
    // 
  }

  ngAfterViewInit() {
    this.renderChart(this.barCanvas1, [20, 18, 20, 15, 20, 20, 19, 21, 17, 25, 24, 28]);
  }

  renderChart(canvas: ElementRef, data) {
    this.barChart = new Chart(canvas.nativeElement, {
      type: 'line',
      data:
      {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
          {
            label: 'Asistencias por mes',
            data: data,
            borderColor: 'rgba(34, 47, 24, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderWidth: 5,

          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              boxWidth: 0,
            }
          }
        },
        scales: {
          y: {
            suggestedMin: 10,
            suggestedMax: 30
          }
        }
      }
    });
  }

}
