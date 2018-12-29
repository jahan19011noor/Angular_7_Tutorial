import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  // templateUrl: './first.component.html',
  template: `<p>
  				inline template
			</p>
			<p>Welcome {{name}}!</p>
			`,
  styleUrls: ['./first.component.css'],
  styles: ['p {color: red}', 'p {font-weight: bold}', `
				p {
					text-decoration: underline;
				}
  			`]
})
export class FirstComponent implements OnInit {
	public name = "Noor"
  constructor() { }

  ngOnInit() {
  }

}
