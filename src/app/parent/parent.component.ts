import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  names = ["John", "David", "Alex"];
  
  constructor() { }

  ngOnInit() {
  }

}
