import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent implements OnInit {

	public logValue = ""

  constructor() { }

  ngOnInit() {
  }

  logValueFunc(value){
  	this.logValue =  value
  	this.logValue = value
  	console.log(this.logValue)
  }

}
