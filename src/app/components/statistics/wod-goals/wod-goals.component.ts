import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-wod-goals',
  templateUrl: './wod-goals.component.html',
  styleUrls: ['./wod-goals.component.scss'],
})
export class WodGoalsComponent implements OnInit {

  @ViewChild('barCanvas1') barCanvas1;
  @ViewChild('barCanvas2') barCanvas2;


  barChart: any;
  lineChart: any;
  week: string;
  month: string;
  previousUrl: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    Chart.register(...registerables);

    this.route.queryParams
      .subscribe((params) => {
        this.month = params['month'];
        this.week = params['week'];
      });
  }



  goBackFunction() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        console.log('prev:', event.url);
        this.previousUrl = event.url;
        this.router.navigate(['this.previousUrl'])
      });
    

    
  }

  ngOnInit() { }


  barChartMethod(canvas: ElementRef, data, label) {
    this.barChart = new Chart(canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Dom', 'Lun', 'Mart', 'Mier', 'Jue', 'Vie', 'Sab'],
        datasets: [{
          label: '',
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
    this.barChartMethod(this.barCanvas1, [0, 7, 9, 9, 7, 8, 0], 'esfuerzo percibido');
    this.barChartMethod(this.barCanvas2, [0, 9, 8, 7, 7, 8, 0], 'descanso');
  }

  getIntencityData(intencity: string){
    var intencityValues = intencity.split("x")
    var up = intencityValues[0];
    var down = intencityValues[1];
    
  }

}

