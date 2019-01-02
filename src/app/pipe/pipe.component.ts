import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public displayName = "First Name"

  public personData = {
  	'first_name': "Noor",
  	'last_name': "Jahan"
  }

  public date = new Date()
  constructor() { }

  ngOnInit() {
  }

}
