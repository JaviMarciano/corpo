import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, CalendarModalOptions, DayConfig } from 'ion2-calendar';
import * as moment from 'moment';
import { Wod } from 'src/app/domain/workout/wod';
import { WodGroup } from 'src/app/domain/workout/wor-group';
import { WodService } from 'src/app/services/wod.service';

@Component({
  selector: 'app-wod-week',
  templateUrl: './wod-week.component.html',
  styleUrls: ['./wod-week.component.scss'],
})
export class WodWeekComponent implements OnInit {


  date: string;
  type: 'string';
  options: CalendarModalOptions;
  wods: DayConfig[] = [];
  wod: any;
  result: any;
  requesting: boolean;
  days: string[] = [];
  wodDates: string[] = [];
  constructor(private wodService: WodService) { }

  ngOnInit() {
    this.requesting = true;
    this.wodService.getAll().subscribe((data: any) => {
      this.requesting = false;
      this.result = data.result;
      data.result.forEach(wod => {

        this.wods.push(this.getDayConfig(wod.date))
        this.wodDates.push(moment(wod.date).locale('es').format("dddd DD"));


      });
      this.days = this.getCurrentWeek();

      this.setupWods();
    }, error => {
      this.requesting = false;
    })



  }

  setupWods() {
    this.options = {
      color: "red",
      weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      daysConfig: this.wods,
      canBackwardsSelected: true,
      showAdjacentMonthDay: false

    }
  }

  onChange($event) {
    var res = this.result.find(x => (moment(x.date,)).format('DD-MM-YYYY') == $event.format('DD-MM-YYYY'));
    console.log(res)
    this.wod = this.getWod(res);
  }

  getWod(wodResponse): Wod {

    console.log("wodResponse",wodResponse)
    var wod = new Wod();
    var indexes = wodResponse.wodGroupsMember.map(x => x.groupIndex);
    wod.goal = wodResponse.goal;

    //indexes.filter((x, i, a) => a.indexOf(x) == i)
    indexes = [...new Set(indexes)]

    indexes.forEach(i => {
      var wodGroup = new WodGroup();
      var exercises = wodResponse.wodGroupsMember.filter(x => x.groupIndex == i).map(e => {

        
        return {
          exercise: e.exercise,
          modality: e.modality,
          units: e.units,
          detail: e.detail,
          mode: e.mode,
          value: e.value
        }
      });
      console.log("exercise", exercises)
      wodGroup.exercises = exercises;
      wodGroup.detail = wodResponse.wodGroupsMember.find(x => x.groupIndex == i).detail;
      wod.addGroup(wodGroup)
      wod.goal

    })
    return wod;
  }

  closeWod() {
    this.wod = null;
  }

  getDayConfig(today): DayConfig {
    var date = new Date(today);
    return {
      date: date,
      marked: true,
      title: date.getDate().toString(),
      subTitle: "",
      cssClass: "attended"
    }
  }

  getCurrentWeek() {
    var currentDate = moment();

    var weekStart = currentDate.clone().startOf('isoWeek');
    var weekEnd = currentDate.clone().endOf('isoWeek');

    var days: string[] = [];
    console.log("wodDates", this.wodDates)

    for (var i = 0; i <= 6; i++) {
      var date = moment(weekStart).add(i, 'days').locale('es').format("dddd DD");
      console.log("date", date)
      if (this.wodDates.includes(date)) {
        console.log("si")
        days.push(date);

      }
    }
    console.log("days", days)
    return days;
  }

  getActiveDay() {
    return moment().locale('es').format("dddd DD");
  }

  viewWod(date) {
    console.log("date",date)
    var res = this.result.find(x => (moment(x.date,)).locale('es').format("dddd DD") == date);
    console.log(res)
    this.wod = this.getWod(res);
  }
}


