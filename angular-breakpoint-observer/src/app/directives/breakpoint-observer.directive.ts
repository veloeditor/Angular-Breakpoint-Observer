import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

type Size = "small" | "large";

const breakpointSizeOptions = {
  small: [Breakpoints.XSmall],
  // medium: [Breakpoints.Small, Breakpoints.Medium],
  large: [Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]
}

@Directive({
  selector: '[appBreakpointObserver]'
})
export class BreakpointObserverDirective implements OnDestroy {
  private subscription = new Subscription();

  @Input("appBreakpointObserver") set size(value: Size) {
    this.subscription.unsubscribe();
    this.subscription = this.breakpointObserver
      .observe(breakpointSizeOptions[value])
      .subscribe(this.updateView);
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  updateView = ({ matches }: BreakpointState) => {
    if (matches && !this.viewContainerRef.length) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else if (!matches && this.viewContainerRef.length) {
      this.viewContainerRef.clear();
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
