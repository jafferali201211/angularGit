import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // Parent to child communication is used
  @Input() childProperty!: string; 

  //child to parent
  
 @Output() messageEvent = new EventEmitter<string>();
 sendMessage(){
  this.messageEvent.emit("hello parent");
 }

}
