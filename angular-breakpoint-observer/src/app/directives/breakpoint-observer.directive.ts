import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

type Size = "small" | "large";

const config = {
  small: [Breakpoints.XSmall, Breakpoints.Small],
  // medium: [Breakpoints.Small, Breakpoints.Medium],
  large: [Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]
}

@Directive({
  selector: '[appBreakpointObserver]'
})
export class BreakpointObserverDirective implements OnDestroy {
  private subscription = new Subscription();

  @Input("appBreakpointObserver") set size(value: Size) {
    this.subscription.unsubscribe();
    this.subscription = this.observer
      .observe(config[value])
      .subscribe(this.updateView);
  }

  constructor(
    private observer: BreakpointObserver,
    private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  updateView = ({ matches }: BreakpointState) => {
    if (matches && !this.vcRef.length) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else if (!matches && this.vcRef.length) {
      this.vcRef.clear();
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
