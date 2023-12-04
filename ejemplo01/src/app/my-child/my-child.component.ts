import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent {

  @Output()miTexto = new EventEmitter<string>();
  @Input()numberFromParent: number | undefined;
  passValueToMain(){
    this.miTexto.emit('que mas mijin')
  }

}
