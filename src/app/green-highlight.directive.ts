import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appGreenHighlight]'
})
export class GreenHighlightDirective {

  @HostBinding('style.background-color') public backgroundColor = 'none'
  @HostListener('mouseenter') public mouseEnter() {
    this.backgroundColor = "green"
  }
  @HostListener('mouseleave') public mouseLeave() {
    this.backgroundColor = 'transparent';
  }

  constructor() { }

}
