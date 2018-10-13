import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('_id') id;
  @Input('_name') name;
  @Input('_email') email;
  @Output() sendData:EventEmitter<any>=new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  public clickMe() {
    this.sendData.emit(this.id + this.name + this.email);
  }
}
