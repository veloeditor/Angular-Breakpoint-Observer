import { BreakpointObserver } from '@angular/cdk/layout';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { BreakpointObserverDirective } from './breakpoint-observer.directive';

describe('BreakpointObserverDirective', () => {
  let observerMock: BreakpointObserver;
  let vcRefMock: ViewContainerRef;
  let templateRefMock: TemplateRef<any>;

  it('should create an instance', () => {
    const directive = new BreakpointObserverDirective(observerMock, vcRefMock, templateRefMock);
    expect(directive).toBeTruthy();
  });
});
