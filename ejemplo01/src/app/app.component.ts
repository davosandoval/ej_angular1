import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo01';
  accumulator:number = 0;

  childData($event:any){
    this.title = $event;
  }

  acc(){
    this.accumulator++;
  }

  reset(){
    this.accumulator = 0;
  }
}


