import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  messageReceived(event: string): void {
    this.messageFromChild = event;
  }

  navigateToChildComponent() {
    setTimeout(() => {
      this.router.navigate(['/child'], { queryParams: { mishu: 'sriyansh' } });
      // this.router.navigate(['../child'], { relativeTo: this.route });
    }, 5000);
  }
}
