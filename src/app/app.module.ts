import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FirstComponent } from './first/first.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { InterpolationComponent } from './interpolation/interpolation.component';
// import { PropertyBindingComponent } from './property-binding/property-binding.component';
// import { ClassBindingComponent } from './class-binding/class-binding.component';
// import { StyleBindingComponent } from './style-binding/style-binding.component';
// import { EventBindingComponent } from './event-binding/event-binding.component';
// import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
// import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
// import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
// import { FirstChildComponent } from './first-child/first-child.component';
// import { PipeComponent } from './pipe/pipe.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
// import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
// import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
// import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
// import { DepartmentContactComponent } from './department-contact/department-contact.component';
// import { DepartmentDetailComponent } from './department-detail/department-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { DepartmentListComponent } from './department-list/department-list.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // EmployeeOverviewComponent,
    // EmployeeContactComponent
    // DepartmentOverviewComponent,
    // DepartmentContactComponent
    // DepartmentDetailComponent
    // PageNotFoundComponent
    // FirstComponent,
    // WelcomeComponent,
    // InterpolationComponent,
    // PropertyBindingComponent,
    // ClassBindingComponent,
    // StyleBindingComponent,
    // EventBindingComponent,
    // TemplateReferenceVariablesComponent,
    // TwoWayBindingComponent,
    // StructuralDirectivesComponent,
    // FirstChildComponent,
    // PipeComponent,
    // EmployeesComponent,
    // EmployeeDetailComponent,
    // DepartmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule      // this registers the HttpClientService to the AppModule for us
                          //so no need to do it explicitely in the providers array
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
