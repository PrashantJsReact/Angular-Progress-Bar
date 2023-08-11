import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RoutesRecognized,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-progress-bar';

  color: ThemePalette = 'accent';
  mode: ProgressBarMode = 'buffer';
  value: number = 0;
  bufferValue: number = 10;
  isLoading: boolean = true;

  constructor(private router: Router) {
    this.subscribeRouterEvent();
  }

  private subscribeRouterEvent() {
    this.router.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        this.setProgressBar(20, 30);
        console.log('Navigation started...');
      } else if (event instanceof RouteConfigLoadStart) {
        this.setProgressBar(50, 60);
        console.log('Module loading started!');
      } else if (event instanceof RouteConfigLoadEnd) {
        this.setProgressBar(70, 80);
        console.log('Module loaded successfully!');
      } else if (event instanceof RoutesRecognized) {
        console.log('Route path found!!');
        this.setProgressBar(90, 100);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        console.log('All done..✌️');
        this.setProgressBar(100, 100);
        this.isLoading = false;
      }
    });
  }

  private setProgressBar(value: number, bufferValue: number) {
    this.value = value;
    this.bufferValue = bufferValue;
  }
}
