import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

	// @Input() public parentData;
	@Input('parentData') public name;

	// sending data to the parent component

	@Output() public childEvent = new EventEmitter()
	constructor() { }

	ngOnInit() {
	}

	fireEvent() {
		this.childEvent.emit("Hi Parent!")
	}

}
