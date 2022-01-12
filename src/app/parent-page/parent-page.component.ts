import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css']
})
export class ParentPageComponent implements OnInit {

  FirstText:string ='This is first text from Parent';
  SecondText:string ="This is the second text from Parent";
  ChildToParentData:string;
  
  constructor() { }

  ngOnInit() {
  }

  public ParentToChild(eventData)
  {
    this.ChildToParentData= eventData;
    console.log("The ParentToChild method data is",+this.ChildToParentData);
  }

}


// test test 2 test3