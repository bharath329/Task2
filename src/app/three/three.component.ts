import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  //templateUrl: './three.component.html',

  template:
  `
  <div class = "supportstyle">{{support()}}</div>
  `,

  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  support(){
    return "With The Help Of Chirag";
  }

}
