import { Component ,ViewChild,ElementRef,AfterViewInit, ViewChildren} from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements AfterViewInit{

  constructor(){
    
  }

  @ViewChild(Child3Component)child!:Child3Component;
 
  ngAfterViewInit(): void {
    console.log(this.child.childMethod());
    console.log(this.child.lastRefresh());
  }

  callChildMethod() {
    this.child.childMethod();
  }
  callchildrefeshDate(){
    this.child.lastRefresh();
  }
}
