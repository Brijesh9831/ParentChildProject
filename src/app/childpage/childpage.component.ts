import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childpage',
  templateUrl: './childpage.component.html',
  styleUrls: ['./childpage.component.css']
})
export class ChildpageComponent implements OnInit {


  @Input() public Text1:string;
  @Input() public Text2:string;
  @Output() ChildToParent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  public ChildToParentMethod()
  {
    this.ChildToParent.emit('data emit from child to parent');

  }

}
