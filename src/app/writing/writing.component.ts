import { Component, OnInit } from '@angular/core';
import { MatTabsModule, MatTab } from '@angular/material/tabs';
// import { slider, transformer, fader, stepper } from '../route-animations';
import { slider, fader, stepper } from '../route-animations';


@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss'],
  animations: [ // <-- add your animations here
    // fader,
    // slider,
    // transformer,
    stepper
  ]
})
export class WritingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
