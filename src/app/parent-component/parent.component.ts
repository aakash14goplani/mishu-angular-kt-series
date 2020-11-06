import { Component, OnInit } from '@angular/core';
import { DataRepositoryService } from '../data-repository.service';
import { GFTDataModel } from '../data.model';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // providers: [DataRepositoryService]
})
export class ParentComponent implements OnInit {
  title = 'Parent';
  imgSource = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  messageForChild = 'Hello Bacha, khana khaya...';
  messageFromChild = '';
  private dataToBeAdded: GFTDataModel = { batchId: 'Batch_03', course: 'SAP', trainerName: 'Jalal', numberOfStudents: 15, studentNames: ['kantika', 'irene'] };

  constructor(
    private dataService: DataRepositoryService
  ) {}

  ngOnInit(): void {
    console.log('service: initial data: ', this.dataService.fetchTrainingData());
    console.log('service: parent adding data...');
    this.dataService.addTrainingData(this.dataToBeAdded);
  }

  messageReceived(event: string): void {
    this.messageFromChild = event;
  }
}
