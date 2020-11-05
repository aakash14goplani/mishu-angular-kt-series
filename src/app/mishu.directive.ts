import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMishu]'
})
export class MishuDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    console.log('sss text: ', this.elementRef);
    console.log('sss text nativeElement: ', this.elementRef.nativeElement);
    this.elementRef.nativeElement.style.color = 'green';

    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
  }

}
