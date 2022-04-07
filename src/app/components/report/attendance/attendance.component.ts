import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar';
import { AttendanceService } from 'src/app/services/attendance.service';






@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {
  date: string;
  type: 'string';
  options: CalendarComponentOptions;
  attendance: DayConfig[] = [];
  constructor(private attendanceService: AttendanceService) {


  }

  ngOnInit() {
    this.attendanceService.getByMonth(1).subscribe((data) => {
      data.result.forEach(date => {
        this.attendance.push(this.getDayConfig(date))
      });
      this.setupAttendance();
    })
  }

  setupAttendance(){
    this.options = {
      color: "red",
      weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      showMonthPicker: false,
      daysConfig: this.attendance
    }      
  }

  onChange($event) {
    console.log($event);
  }

  getDayConfig(today): DayConfig {
    var date = new Date(today);
    return {
      date: date,
      marked: true,
      title: date.getDate().toString(),
      subTitle: "si",
      cssClass: "attended"
    }
  }
}
