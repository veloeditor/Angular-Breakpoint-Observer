import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '../interfaces/user';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpClientMock: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    httpClientMock = TestBed.get(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = new DataService(httpClientMock);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('', () => {
      service.getUsers();
      const req = httpTestingController.expectOne(request => {
        console.log('url:', request.url);
        return request.url.indexOf(service.fakeApiUrl) !== -1;
      });
      const response = [] as unknown as User;
      req.flush(response);
      expect(req.request.method).toBe('GET');
    });
  });


});
