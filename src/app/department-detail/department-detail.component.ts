import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departments = [];
  public errorMsg;
  public departmentId;

  constructor(private _departmentService: DepartmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this._departmentService.getDepartments()
  		.subscribe(data => this.departments = data,
  					error => this.errorMsg = error)

  	// let id = parseInt(this.route.snapshot.paramMap.get('id'));
  	// this.departmentId = id;
  	//the snapshot approach does not work if we are navigating back and forth using the same component
  	//as a result the ngOnInit method does not get called and thus the snapshot does not taken on this navigation
  	//so the this.departmentId remains the same between the navigation

  	// to overcome this drawback we use the paramMap Observable
  	
  	this.route.paramMap.subscribe((param: ParamMap) => {
  		let id = parseInt(param.get('id'));
  		this.departmentId = id;
  	})
  }

  goPrevious() {
  	let previousId = this.departmentId - 1;
  	// this.router.navigate(['/departments', previousId])
  	this.router.navigate(['../', previousId], {relativeTo: this.route})
  }

  goNext() {
  	let nextId = this.departmentId + 1;
  	// this.router.navigate(['/departments', nextId])
  	this.router.navigate(['../', nextId], {relativeTo: this.route})
  }

  gotoDepartments() {
  	let selectedId = this.departmentId ? this.departmentId : null;
  	// this.router.navigate(['/departments', {id: selectedId}])
  	this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route})
  }

  showOverview() {
  	this.router.navigate(['overview'], {relativeTo: this.route})
  }

  showContact() {
  	this.router.navigate(['contact'], {relativeTo: this.route})
  }

}



















