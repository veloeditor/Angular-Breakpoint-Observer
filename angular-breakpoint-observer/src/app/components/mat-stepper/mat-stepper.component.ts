import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { StepperOrientation } from '@angular/material/stepper';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.component.html',
  styleUrls: ['./mat-stepper.component.scss']
})
export class MatStepperComponent implements OnInit {
  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    thirdCtrl: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation> | undefined;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
      .observe('(max-width: 600px)')
      .pipe(map(({ matches }) => (matches ? 'vertical' : 'horizontal')));

    this.breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
