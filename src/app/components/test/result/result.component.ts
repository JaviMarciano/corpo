import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {

  memberId: number;
  id: number;
  url = 'https://www.youtube.com/watch?v=KtZsQrYAJ0Y';
  testResults = [{
    name: '1 Milla',
    testType: 1,
    minutes: 0,
    seconds: 0,
    video: null,
    result: {
      time: '2 minutos',
      initialHeartRate: 95,
      finalHeartRate: 110,
      repetitions: null,
      video: null
    }
  },
  {
    name: 'HR push up',
    testType: 2,
    minutes: 2,
    seconds: 30,
    video: null,
    result: {
      time: null,
      initialHeartRate: 95,
      finalHeartRate: 110,
      repetitions: 15,
      video: null
    }
  },
  {
    name: 'Sentadilla OH',
    testType: 3,
    minutes: 0,
    seconds: 0,
    video: 'https://www.youtube.com/watch?v=KtZsQrYAJ0Y',
    result: {
      time: null,
      initialHeartRate: null,
      finalHeartRate: null,
      repetitions: null,
      video: 'https://www.youtube.com/results?search_query=sentadillas'
    }
  }];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params => {
        this.id = parseInt(params['id']);
        this.memberId = parseInt(params['memberId'])
      })
  }

  ngOnInit() {
  }
}
