import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable, of } from 'rxjs';

import { MatStepperComponent } from './mat-stepper.component';

describe('MatStepperComponent', () => {
  let component: MatStepperComponent;
  let breakPointObserverMock: BreakpointObserver;
  let formBuilderMock: FormBuilder;
  let stepObserverMock: Observable<StepperOrientation>;


  beforeEach(async () => {
    formBuilderMock = new FormBuilder();
    stepObserverMock = new Observable<StepperOrientation>();
    component = new MatStepperComponent(breakPointObserverMock, formBuilderMock);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
