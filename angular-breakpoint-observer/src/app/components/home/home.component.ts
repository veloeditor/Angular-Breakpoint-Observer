import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  large: any = 'large';
  medium: any = 'medium';
  small: any = 'small';
  isMobile: boolean = false;

  constructor(private breakpointObserverService: BreakpointObserverService) { }

  ngOnInit(): void {
    // once per component initiation. this will not dynamically check with each breakpoint change as currently setup
    this.isMobile = this.breakpointObserverService.getBreakpointState();
    console.log('isMobile:', this.isMobile);
  }

}
