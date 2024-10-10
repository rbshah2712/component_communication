import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


    @Input() text: string | undefined;
    @Output() textChange = new EventEmitter<string>();
    
    valueChange(value: string) : void{
      this.textChange.emit(value);
      }

  constructor() { }

  ngOnInit(): void {
  }
  

}
