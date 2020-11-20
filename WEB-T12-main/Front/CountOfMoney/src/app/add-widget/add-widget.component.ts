import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.scss']
})
export class AddWidgetComponent implements OnInit {
  displayChoice = false;
  constructor() { }

  ngOnInit(): void {
  }
  switchDisplayChoice() {
    this.displayChoice = !this.displayChoice;
  }
}
