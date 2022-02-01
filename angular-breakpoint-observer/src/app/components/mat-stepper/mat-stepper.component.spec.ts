import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import { map, Observable, of } from 'rxjs';

import { MatStepperComponent } from './mat-stepper.component';

describe('MatStepperComponent', () => {
  let component: MatStepperComponent;
  let breakPointObserverMock: BreakpointObserver;
  let formBuilderMock: FormBuilder;
  let stepObserverMock: Observable<StepperOrientation>;


  beforeEach(async () => {
    formBuilderMock = new FormBuilder();
    stepObserverMock = new Observable<StepperOrientation>();
    breakPointObserverMock = TestBed.inject(BreakpointObserver);

    component = new MatStepperComponent(breakPointObserverMock, formBuilderMock);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call the breakpointobserver when app is initiated and set isMobile to false when in desktop mode', () => {
      const value = { matches: false, breakpoints: { '(max-width: 600px)': false } };
      spyOn(breakPointObserverMock, 'observe').and.returnValue(of(value));
      component.ngOnInit();
      expect(breakPointObserverMock.observe).toHaveBeenCalled();
      expect(component.isMobile).toBeFalse();
    });

    it('should return isMobile as true when breakpointObserver matches mobile width', () => {
      const value = { matches: true, breakpoints: { '(max-width: 600px)': true } };
      spyOn(breakPointObserverMock, 'observe').and.returnValue(of(value));
      // spyOn(breakPointObserverMock.observe('(max-width: 600px)'), 'pipe').and.callThrough();
      component.ngOnInit();
      expect(component.isMobile).toBeTrue();
    });
  });

});
