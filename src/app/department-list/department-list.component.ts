import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-department-list',
  template: `
    <h2>Department List</h2>
    <h3>{{ errorMsg }}</h3>
    <ul (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments; index as i">
      <li><button>{{ department.name }}</button></li>
    </ul>
  `,
  styles: [`
    li > button {
      padding: 10px;
      margin-right: 20px;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    .selected > li > button{
      background-color: blue;
      color: white;
    }
  `]
})
export class DepartmentListComponent implements OnInit {

  public departments = [];
  public errorMsg
  public selectedId;

  constructor(private _departmentService: DepartmentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.departments = this._departmentService.getDepartments()
    this._departmentService.getDepartments()
        .subscribe(data => this.departments = data,
                   error => this.errorMsg = error)

    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(department){
    // this.router.navigate(['/departments', department.id])
    this.router.navigate([department.id], {relativeTo: this.route})
  }

  isSelected(department) {
    return department.id === this.selectedId
  }

}
