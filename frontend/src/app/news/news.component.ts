import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public title = "I am news component"; 
  public username:string = "Lawrene";
  public data:any= {
      "name" : "Lawrence",
      "ID"   : "0756554"
  };
  public new_property:string = "I am news!";
  public content:string = "<h2>I am new content<h2>";

  public array:Array<number> = [1111, 2222, 3333, 4444, 5555, 6666, 7777];

  constructor() { }

  ngOnInit(): void {
  }

}
