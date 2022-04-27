import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestExerciseMember } from 'src/app/domain/test/test-exercise-member';
import { TestMember } from 'src/app/domain/test/test-member';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  id: number;
  testMember = {
    name:'Nivel 0',
     memberId: 1,
      testExercisesMember: [{    
        id: 1,
        name: '1 Milla',
        testType: 1,
        video: '',
        minutes: 0,
        seconds: 0},
        {    
          id: 2,
          name: 'HR push up',
          testType: 2,
          video: '',
          minutes: 1,
          seconds: 30},
      {
        id: 3,
        name: 'Sentadilla OH',
        testType: 3,
        video: 'https://www.youtube.com/watch?v=96RdrYyoogM',
        minutes: 0,
        seconds: 0}
      ]};

  constructor(private testService: TestService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(
        params => {this.id = parseInt(params['id'])}
      )
     }

  ngOnInit() {}

  getTestValid(){
    this.testService.getTestValid().subscribe(
      response => {
        console.log(response)
      },
      error => console.error(error)
    )
  }

}
