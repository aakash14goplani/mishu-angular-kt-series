import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  title = 'Parent';
  imgSource = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  messageForChild = 'Hello Bacha, khana khaya...';
  messageFromChild = '';

  messageReceived(event: string): void {
    this.messageFromChild = event;
  }
}
