import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'



@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

	public employees = []
	public errorMsg;
	public employeeId;

	constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		// this.employees = this._employeeService.getEmployees()
		this._employeeService.getEmployees()
			.subscribe(data => this.employees = data,
						error => this.errorMsg = error);

		this.route.paramMap.subscribe((param: ParamMap) => {
			let id = parseInt(param.get('id'))
			this.employeeId = id;
		})
	}

	goPrevious() {
		let previousId = this.employeeId - 1;
		this.router.navigate(["../", previousId], {relativeTo: this.route})
	}

	goNext() {
		let nextId = this.employeeId + 1;
		this.router.navigate(['../', nextId], {relativeTo: this.route})
	}

	gotoEmployees() {
		let selectedId = this.employeeId ? this.employeeId : null;
		// this.router.navigate(["/employees", {id: selectedId}])
		this.router.navigate(["../", {id: selectedId}], {relativeTo: this.route})
	}

	showOverview() {
		this.router.navigate(['overview'], {relativeTo: this.route});
	}

	showContact() {
		this.router.navigate(['contact'], {relativeTo: this.route})
	}

}
