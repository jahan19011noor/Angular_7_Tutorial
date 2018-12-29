import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css'],
  styles: [`

			.text-success
			{
				color: green
			}
			.text-danger
			{
				color: red
			}
			.text-special
			{
				color: blue
			}
			.text-italic
			{
				font-style: italic
			}
  			`]
})
export class ClassBindingComponent implements OnInit {

	public successClass = "text-success"
	public dangerClass = "text-danger"
	public specialClass = "text-special"
	// public italicClass = "text-italic"
	public isDanger = true
	public isSuccess = false
	public isItalic = true

	public classesToApply = {
		"text-success": this.isSuccess,
		"text-danger": !this.isSuccess,
		"text-italic": this.isItalic
	}

	constructor() { }

	ngOnInit() {
	}

}
