import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

	public employees = []
	public errorMsg;
	public selectedId;


	constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		// this.employees = this._employeeService.getEmployees()
		this._employeeService.getEmployees()
			.subscribe(data => this.employees = data,
						error => this.errorMsg = error);

		this.route.paramMap.subscribe((param: ParamMap) => {
			let id = parseInt(param.get('id'))
			this.selectedId = id;
		})
	}

	onSelect(employee) {
		// this.router.navigate(['/employees', employee.id])
		this.router.navigate([employee.id], {relativeTo: this.route})
		// this.router.navigate(['/departments', department.id])
	}

	isSelected(employee) {
		return employee.id === this.selectedId
	}

}
