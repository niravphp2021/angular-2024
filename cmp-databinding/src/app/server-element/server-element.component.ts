import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent {
  @Input() element : { type: string, name: string, content: string };
  @Input() name : string;

  constructor(){
    console.log('constructor called...');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('on changes called');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngonInit called...');
  }
  
}
