import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponent implements OnInit {

  @Input() messageReceiver;
  @Output() messageFromChild = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      data => {
        console.log('this is my data: ', data);
      },
      error => {
        console.log('error while fetching data: ', error);
      }
    );
  }

  clicked(event: any): void {
    console.log('Event fired with data: ', event);
    this.messageFromChild.emit('Haan Khal liya...');
  }

}
