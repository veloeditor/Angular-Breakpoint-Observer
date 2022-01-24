import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  large: any = 'large';
  medium: any = 'medium';
  small: any = 'small';

  constructor() { }

  ngOnInit(): void {
  }

}
