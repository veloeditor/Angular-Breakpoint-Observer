import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointObserverService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  getBreakpointState(): boolean {
    let isMobile: boolean = false;
    this.breakpointObserver.observe('(max-width: 600px)').subscribe(result => {
      return isMobile = result.matches;
    });

    return isMobile;
  }
}
