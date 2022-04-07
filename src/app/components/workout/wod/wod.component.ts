import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { WodService } from 'src/app/services/wod.service';
import { PeriodizationService } from '../../../services/periodization.service';

@Component({
  selector: 'app-wod',
  templateUrl: './wod.component.html',
  styleUrls: ['./wod.component.scss'],
})
export class WodComponent implements OnInit {

  @Input() wod: any;
  @Output() wodEventEmitter = new EventEmitter();

  constructor(private wodService: WodService) { }

  ngOnInit() {
    this.wodService.getAll().subscribe((wods) => {
      console.log(wods)
    })

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("wod", this.wod)
  }

  goBack() {
    this.wodEventEmitter.emit();
  }

  openVideo(url: string) {
    console.log(url)
    window.open(url, '_system');
  }

  getValue(exercise) {
    return exercise.value + " " + exercise.mode;

  }

  getGoals(goals) {
    return goals.split("-");
  }
}
