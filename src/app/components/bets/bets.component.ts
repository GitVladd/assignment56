import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() totalAmount:number = 0;
  @Output() newTotalAmount = new EventEmitter<number>();

  returnTotal(){
    this.newTotalAmount.emit(this.totalAmount);
  }

  onClick1(){
    this.totalAmount++;
    this.returnTotal();
  };
  onClick5(){
    this.totalAmount = this.totalAmount+5;
    this.returnTotal();
  };
  onClick10(){
    this.totalAmount = this.totalAmount+10;
    this.returnTotal();
  };
  onClick20(){
    this.totalAmount = this.totalAmount+20;
    this.returnTotal();
  };

}
