import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { BreakpointObserverDirective } from './directives/breakpoint-observer.directive';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { TableComponent } from './components/table/table.component';
import { MatStepperComponent } from './components/mat-stepper/mat-stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ServiceExampleComponent } from './components/service-example/service-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreakpointObserverDirective,
    HeaderComponent,
    HeaderMobileComponent,
    TableComponent,
    MatStepperComponent,
    SidenavComponent,
    ServiceExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
