import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.scss']
})
export class LegendsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generateLegend();
  }

 @Input() legend: Array<any>= [];

 generateLegend(){

 }
}
