import { Component ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
    //child to parent
  
 @Output() notifyMsg = new EventEmitter<string>();

 sendMessage(){
  this.notifyMsg.emit("This is message from child");
 }

}
