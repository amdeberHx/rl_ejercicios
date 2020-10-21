import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]' // Attribute selector
})
export class OnlyNumbersDirective {

  constructor( private _el: ElementRef ) {}

  @HostListener('input', ['$event']) onInputChange(event) {
    if (!event.data) {
      return;
    }

    const result = event.data.match(/[\Wa-zA-Z_]/g);
    if (result !== null) {
      debugger;
      const initalValue = this._el.nativeElement.value;
      this._el.nativeElement.value = initalValue.replace(/[^0-9]/gi, '');
      event.stopPropagation();
    }

  }
}
