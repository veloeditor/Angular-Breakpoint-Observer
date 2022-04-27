
import { BreakpointObserver } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
    let component: TableComponent;
    let dataServiceMock: DataService;
    let breakpointObserverMock: BreakpointObserver;

    beforeEach(() => {
        dataServiceMock = {
            users$: new BehaviorSubject<User[]>([]),
            getUsers: () => { }
        } as DataService;
        breakpointObserverMock = TestBed.inject(BreakpointObserver);
        component = new TableComponent(breakpointObserverMock, dataServiceMock);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('should call the dataService.users$ behavior subject and subscribe to it', () => {
            spyOn(dataServiceMock.users$, 'subscribe').and.callThrough();
            component.ngOnInit();
            dataServiceMock.getUsers();
            expect(component.dataSource.data).toEqual(component.users);
            expect(dataServiceMock.users$.subscribe).toHaveBeenCalled();
        });
    });
});
