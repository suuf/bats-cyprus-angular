import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private readonly yOffset = -75;

  scrollToElement(element: HTMLElement): void {
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.scrollY + this.yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
