import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null!)
  }


  changeColor(color: string) {
    console.log("this.el.nativeElement" , this.el);
    
    this.el.nativeElement.style.backgroundColor = color;
  }
}
