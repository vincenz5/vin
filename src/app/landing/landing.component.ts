import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { BottomComponent } from '../bottom/bottom.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
