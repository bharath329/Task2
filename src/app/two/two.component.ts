import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  //templateUrl: './two.component.html',
  template:
  `<h4 style ="color: Brown">
  {{name1}}
  </h4>

  `,
  styleUrls: ['./two.component.css']
 
})
export class TwoComponent implements OnInit {
  public name1 = "Learning Angular";

  constructor() { }

  ngOnInit() {
  }

}
