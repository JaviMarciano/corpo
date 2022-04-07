import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-periodization-goals',
  templateUrl: './periodization-goals.component.html',
  styleUrls: ['./periodization-goals.component.scss'],
})
export class PeriodizationGoalsComponent implements OnInit, AfterViewInit {

  barChart: any;
  lineChart: any;
  @ViewChild('barCanvas1') barCanvas1;
  month: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    Chart.register(...registerables);

    this.route.queryParams
      .subscribe((params) => {
        this.month = params['month'];
      });
  }

  ngOnInit() {
    console.log(this.barCanvas1)
    // 
  }

  ngAfterViewInit() {
    this.renderChart(this.barCanvas1, [3, 4, 3, 5, 5]);
  }

  renderChart(canvas: ElementRef, data) {
    this.barChart = new Chart(canvas.nativeElement, {
      type: 'line',
      data:
      {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [
          {
            label: 'Asistencias',
            data: data,
            borderColor: 'rgba(34, 47, 24, 0.8)',
            backgroundColor: 'rgba(169, 230, 71, 0.6)',
            borderWidth: 5
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
            suggestedMin: 0,
            suggestedMax: 7
          }
        }
      }
    });
  }

  goToGoals() {
    console.log("dsfsdf")
    this.router.navigate(['/goals']);
  }

}


