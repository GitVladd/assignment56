import { Component, OnInit } from '@angular/core';

import { Mark } from 'src/app/interfaces/mark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment';


  ngOnInit(): void {
    for (let i: number = 0; i < 20; i++) {
      this.allMarks.push({ value: i + 1, isTaken: false });
    }
  }

  allMarks: Mark[] = [];
  totalAmount: number = 0;

  onClickMark(newMark: Mark) {
    const foundIndex = this.allMarks.findIndex((mark) => newMark.value == mark.value);
    this.allMarks[foundIndex] = newMark;
  };

  newTotalAmount(newAmount: number) {
    this.totalAmount = newAmount;
  }

  clearTotal(clearTotal: number) {
    this.totalAmount = 0;
    this.allMarks.forEach(element => {element.isTaken = false});
  }

}
