import { Component, OnInit, Input } from '@angular/core';
import { Mark } from 'src/app/interfaces/mark';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() allMarks:Mark[] = [];
  @Input() totalAmount:number = 0;

}
