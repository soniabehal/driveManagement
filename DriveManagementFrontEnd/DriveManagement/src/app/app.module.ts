import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UniversityProfileComponent } from './university-profile/university-profile.component';
import { CompaniesComponent } from './companies/companies.component';
import { StudentsComponent } from './students/students.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversityProfileComponent,
    CompaniesComponent,
    StudentsComponent,
    TasksComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
