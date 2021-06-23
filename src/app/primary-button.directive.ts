import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPrimaryButton]'
})
export class PrimaryButtonDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "#fee86d");
  }

}
