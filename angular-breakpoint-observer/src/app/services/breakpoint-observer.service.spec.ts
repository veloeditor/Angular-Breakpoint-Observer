import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';

import { BreakpointObserverService } from './breakpoint-observer.service';

describe('BreakpointObserverService', () => {
  let service: BreakpointObserverService;
  let breakPointObserverMock: BreakpointObserver;
  let mediaMatcherMock: MediaMatcher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakpointObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
