import { Directive, ElementRef, HostListener } from "@angular/core"

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("#ffeb3b")
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null)
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color
    if (color) {
      this.el.nativeElement.style.transition = "background-color 0.3s"
    }
  }
}
