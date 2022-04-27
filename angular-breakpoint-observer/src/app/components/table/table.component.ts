import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // the following line is how we typical establish which columns show in a mat table
  // displayedColumns: string[] = ['name', 'phone', 'username', 'website', 'email', 'address'];
  displayedColumns: string[] = [];
  users: User[] = [];
  isMobile: boolean = false;
  dataSource = new MatTableDataSource<any>();

  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers();
    this.dataService.users$.subscribe(response => {
      this.users = response;
      this.dataSource.data = this.users;
    });
    // the following method pulls in the breakpointobserver and sets the columns name array based on if mobile or not
    this.callBreakPointObs();
  }

  private callBreakPointObs() {
    this.breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.isMobile = result.matches;
      this.displayedColumns = this.isMobile ?
        ['name', 'phone', 'username'] :
        ['name', 'phone', 'username', 'website', 'email', 'address'];
    });
  }
}
