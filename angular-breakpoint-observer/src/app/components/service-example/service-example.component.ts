import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent implements OnInit {
  // the following code when not commented out will dynamically call the service everytime innerWidth changes
  // @HostListener('window:resize', ['$event'])
  // onResize(event: { target: { innerWidth: any; }; }) {
  //   event.target.innerWidth = 'max-width: 600px';
  //   console.log('Resizing');
  //   this.isMobile = this.breakpointObserverService.getBreakpointState();
  // }
  isMobile: boolean = false;

  constructor(private breakpointObserverService: BreakpointObserverService) { }

  ngOnInit(): void {
    // once per component initiation. this will not dynamically check with each breakpoint change as currently setup
    this.isMobile = this.breakpointObserverService.getBreakpointState();
    console.log('isMobile:', this.isMobile);
  }

}
