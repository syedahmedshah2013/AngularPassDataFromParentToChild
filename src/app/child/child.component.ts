import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {
  private _name:string;
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || "[No Name]";
  }
  get name() { return this._name; }

  constructor() { }

  ngOnInit() {
  }
}
