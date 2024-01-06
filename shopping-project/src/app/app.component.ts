import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature: string;

  constructor(){
    this.loadedFeature = '';
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
