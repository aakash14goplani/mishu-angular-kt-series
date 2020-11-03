import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponent implements OnInit {

  @Input() messageReceiver;
  @Output() messageFromChild = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked(event: any): void {
    console.log('Event fired with data: ', event);
    this.messageFromChild.emit('Haan Khal liya...');
  }

}
