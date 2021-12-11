import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mark } from 'src/app/interfaces/mark';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() allMarks: Mark[] = [];
  @Input() totalAmount:number = 0;

  @Output() newMark = new EventEmitter<Mark>();
  @Output() newTotalAmount = new EventEmitter<number>();

  size: number = 0;

  onClickMark(newMark: Mark) {
    if (newMark.isTaken == true) {
      this.size++;
      if (this.size >= 6) {
        this.size = 5;
      } else {
        this.newMark.emit(newMark);
      }
    } else {
      this.size--;
      if (this.size < 0) {
        this.size = 0;
      }
      this.newMark.emit(newMark);
    }

  };

  clearTotal(){
    if(this.size == 5){
      this.newTotalAmount.emit(0);
      this.size = 0;
    }   
  };

  clickCash(){
    if(this.size == 5){
      if(this.totalAmount == 0){
        alert("Please, place a bet");
      }else{
        alert("Cash button is clicked");
      }      
    }
  };
}
