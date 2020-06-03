import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() array: string[];
  @Output() secondCompText = new EventEmitter<string>();

  public text: string;
  public collapse: boolean = true;

  public onCollapse() {
    this.collapse = !this.collapse;
  }

  public onSecondAdd() {
    this.secondCompText.emit(this.text);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
