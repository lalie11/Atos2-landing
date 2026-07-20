import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Reproduit le comportement du script.js d'origine :
 * les éléments portant la classe .reveal deviennent .visible
 * lorsqu'ils entrent dans le viewport (IntersectionObserver).
 *
 * Usage : <div class="reveal" appReveal>...</div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
