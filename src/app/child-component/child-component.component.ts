import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataRepositoryService } from '../data-repository.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  // providers: [DataRepositoryService]
})
export class ChildComponent implements OnInit {

  @Input() messageReceiver;
  @Output() messageFromChild = new EventEmitter<string>();

  constructor(
    private dataService: DataRepositoryService
  ) {}

  ngOnInit(): void {
    console.log('service: child reading data...');
    const dataFromDatabase = this.dataService.fetchTrainingData();
    console.log('service: child data: ', dataFromDatabase);
  }

  clicked(event: any): void {
    console.log('Event fired with data: ', event);
    this.messageFromChild.emit('Haan Khal liya...');
  }

}
