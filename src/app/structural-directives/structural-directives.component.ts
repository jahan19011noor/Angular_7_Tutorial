import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

	public showElement = false;
	public displayThenBlock = true;
	public pickedColor = "pink";

	public colors = ["red", "green", "blue", "yellow", "pink"]
	constructor() { }

	ngOnInit() {
	}

}
