import { Component, Input, OnInit, Output, EventEmitter, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() messageReceiver;
  @Output() messageFromChild = new EventEmitter<string>();

  constructor() {
    console.log('sss constructor fired...');
  }

  ngOnInit(): void {
    console.log('sss ngOnInit fired...');
  }

  ngOnChanges(): void {
    console.log('sss ngOnChanges fired...');
  }

  ngDoCheck(): void {
    console.log('sss ngDoCheck fired...');
  }

  ngAfterViewInit(): void{
    console.log('sss ngAfterViewInit fired...');
  }

  ngAfterViewChecked(): void{
    console.log('sss ngAfterViewChecked fired...');
  }

  clicked(event: any): void {
    console.log('Event fired with data: ', event);
    this.messageFromChild.emit('Haan Khal liya...');
  }

  ngOnDestroy(): void {
    console.log('sss ngOnDestroy fired...');
  }

}
