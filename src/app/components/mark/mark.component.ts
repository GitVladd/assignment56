import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mark } from 'src/app/interfaces/mark';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() mark:Mark = {
    value:0,
    isTaken:false
  };

  @Output() newMark = new EventEmitter<Mark>();

  onClickMark(){
    const newIsTaken = !this.mark.isTaken;

    const newMark = { value: this.mark.value, isTaken: newIsTaken};

    this.newMark.emit(newMark);
  }
}
