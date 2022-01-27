import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { StepperOrientation } from '@angular/cdk/stepper';

@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.component.html',
  styleUrls: ['./mat-stepper.component.scss']
})
export class MatStepperComponent implements OnInit {
  stepperOrientation: Observable<StepperOrientation> | undefined;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
      .observe('(max-width: 600px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    console.log(this.stepperOrientation);
  }

}
