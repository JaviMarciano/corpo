import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  id: number;
  exercise = { };
  testExercisesMember: any[] = [{    
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
        seconds: 0
      }];
  resultExercise: {};
  type: number;

  constructor(private testService: TestService,
    private route: ActivatedRoute ) {
      this.route.queryParams.subscribe(params => {
        this.id = parseInt(params['id']);
        this.type = parseInt(params['type']);
        this.exercise = this.testExercisesMember[this.type-1];
    });
    // this.getExerciseById();
     }

  ngOnInit() {
  }

  getExerciseById(){
    // this.testService.getExerciseById(this.id).subscribe(
    //   response => {
    //     console.log("Ejercicio: ", response)
    //   },
    //   error => console.error(error)
    // )
   
  }

}
