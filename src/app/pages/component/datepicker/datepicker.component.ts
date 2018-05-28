import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const my = new Date();

@Component({
	selector: 'datepicker-basic',
	templateUrl: './datepicker.component.html'
})

export class NgbdDatepickerBasic  { 
  model: NgbDateStruct;
  model2; 
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate()};
  }

  // This is for multiple month
  displayMonths = 2;
  navigation = 'select';

  // This is for the disable datepicker
  model3: NgbDateStruct = {year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate()};
  disabled = true; 
}
