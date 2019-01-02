import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// route components:
import { FirstComponent } from './first/first.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { PipeComponent } from './pipe/pipe.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{path: '', redirectTo: '/welcome', pathMatch: 'full'}, //pathMatch: 'prefix' does not work for us
	{path: 'welcome', component: WelcomeComponent},
	{path: 'first-component', component: FirstComponent},
	{path: 'interpolation', component: InterpolationComponent},
	{path: 'property-binding', component: PropertyBindingComponent},
	{path: 'class-binding', component: ClassBindingComponent},
	{path: 'style-binding', component: StyleBindingComponent},
	{path: 'event-binding', component: EventBindingComponent},
	{path: 'template-reference-variables', component: TemplateReferenceVariablesComponent},
	{path: 'two-way-binding', component: TwoWayBindingComponent},
	{path: 'structural-directives', component: StructuralDirectivesComponent},
	{path: 'first-child', component: FirstChildComponent},
	{path: 'pipe', component: PipeComponent},
	{path: 'employees', component: EmployeesComponent},
	{
		path: 'employees/:id', 
		component: EmployeeDetailComponent,
		children: [
			{ path: 'overview', component: EmployeeOverviewComponent },
			{ path: 'contact', component: EmployeeContactComponent }
		]
	},
	{path: 'departments', component: DepartmentListComponent},
	{
		path: 'departments/:id', 
		component: DepartmentDetailComponent,
		children: [
			{ path: 'overview', component: DepartmentOverviewComponent },
			{ path: 'contact', component: DepartmentContactComponent }
		]
	},
	{path: '**', component: PageNotFoundComponent}			// this should be the last route always
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
		FirstComponent,
		WelcomeComponent,
		InterpolationComponent,
		PropertyBindingComponent,
		ClassBindingComponent,
		StyleBindingComponent,
		EventBindingComponent,
		TemplateReferenceVariablesComponent,
		TwoWayBindingComponent,
		StructuralDirectivesComponent,
		FirstChildComponent,
		PipeComponent,
		EmployeesComponent,
		EmployeeDetailComponent,
		EmployeeOverviewComponent,
		EmployeeContactComponent,
		DepartmentListComponent,
		DepartmentDetailComponent,
		DepartmentOverviewComponent,
		DepartmentContactComponent,
		PageNotFoundComponent
	]