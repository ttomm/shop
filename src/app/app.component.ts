import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'shop';
  currentComponent: string;

  onComponentChosen(component: string) {
    this.currentComponent = component;
  }
}
