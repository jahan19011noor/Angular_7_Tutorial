import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
	public hasError = true
	public styleColor = "red"
	public styleCollection = {
		color: "brown",
		fontWeight: "bold",
		textDecoration: "underline"
	}
  constructor() { }

  ngOnInit() {
  }

}
