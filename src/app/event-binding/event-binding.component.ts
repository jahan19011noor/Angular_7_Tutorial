import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

	public greeting = "";
	public eventInfo = "";
  constructor() { }

  ngOnInit() {
  }

  onClick() {
  	this.greeting = "Welcome! you have clicked a button!"
  	console.log("WElcome:")
  }

  getClickInfo(event) {	

  	// console.log(event)
  	this.eventInfo = event.type

  }

}
