import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  fakeApiUrl = 'https://jsonplaceholder.typicode.com/users';
  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) { }

  getUsers(): void {
    this.http.get<User[]>(this.fakeApiUrl).subscribe((response: any) => {
      this.users$.next(response);
    });
  }
}

