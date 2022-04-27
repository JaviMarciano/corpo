import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tests',
  templateUrl: './my-tests.component.html',
  styleUrls: ['./my-tests.component.scss'],
})
export class MyTestsComponent implements OnInit {
  id: number;
  memberId: number;
  tests = [];
  displayTests: boolean;

  constructor() { }

  ngOnInit() {}

  getTestHistory(){
    this.displayTests = true;
    this.tests = [   
      {id:2, name: 'Nivel 0', valid: false, date:'03/05/2021'},
      {id:1, name: 'Nivel 1', valid: false, date:'11/07/2021'},
      {id:3, name: 'Nivel 0', valid: true, date:'11/04/2022'}
    ]
  }

  hideTests(){
    this.displayTests = false;
  }
}
