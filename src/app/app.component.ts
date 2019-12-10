import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, fader, stepper } from './route-animations';
// import { slider, transformer, fader, stepper } from './route-animations';

// import {
//   trigger,
//   transition,
//   style,
//   query,
//   group,
//   animateChild,
//   animate,
//   keyframes,
// } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ // <-- add your animations here
    fader,
    slider,
    // transformer,
    stepper
  ]
})
export class AppComponent {
  title = 'vin';

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['fader'];
  }

  // this.router.events.subscribe(event => {
  //   // close sidenav on routing
  //   this.sidenavService.close();
  // });
  
}
