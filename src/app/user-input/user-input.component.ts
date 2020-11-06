import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit, AfterViewChecked {

  @ViewChild('player') playerName: ElementRef;
  surname: string = '';

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    console.log('element: ', this.elementRef.nativeElement);
    console.log('element value: ', this.elementRef.nativeElement.value);
  }

  ngAfterViewChecked(): void {
    console.log('surname: ', this.surname);
  }

  playerDetails($event) {
    console.log($event);
    console.log('name: ', $event.value);
  }

}
