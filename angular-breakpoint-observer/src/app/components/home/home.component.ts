import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  large: any = 'large';
  medium: any = 'medium';
  small: any = 'small';
  isMobile: boolean = false;

  constructor() { }

}
