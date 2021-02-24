import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imgurls:Array<string> = [
    "assets/260700.jpg", "assets/295455.jpg", "assets/295457.jpg"
  ];
  public showimg:Boolean = false;
  public keywords:string = "Default Value";

  public item_list:Array<string> = [
    "第一項哈哈哈", "第二項哈哈哈", "第三項哈哈哈"
  ];

  public today:any = new Date();
  constructor() { }

  run(): void {
    alert("Run Click Event");
  }
  ngOnInit(): void {
  }

  keyDown(e:any):void {
    if (e.keyCode == 13){
      console.log("Press Enter");
    }
  }
}
