import { Component } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  lastRefreshed!:string;
  //example 1 for view child
  childMethod(){
    console.log("the child method called");
    
  }
  //example2 for view child
  lastRefresh(){
    console.log("the child  date method called");
    this.lastRefreshed =new Date().toLocaleTimeString();
    console.log(this.lastRefreshed);
    

  }
}
