import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder } from '@angular/forms';

import { MatStepperComponent } from './mat-stepper.component';

describe('MatStepperComponent', () => {
  let component: MatStepperComponent;
  let breakPointObserverMock: BreakpointObserver;
  let formBuilderMock: FormBuilder;


  beforeEach(() => {
    formBuilderMock = new FormBuilder();
    component = new MatStepperComponent(breakPointObserverMock, formBuilderMock);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
