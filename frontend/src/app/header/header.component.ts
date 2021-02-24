import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public request:RequestService) { 


  }

  ngOnInit(): void {
    // sync
    let data = this.request.get_Data();
    console.log(data);
    
    // async: callback get data 
    let callback_Data = this.request.getCallBackData((param:any)=>{console.log(param)});
    console.log(callback_Data); // undefined
  
    // async: promise get data
    var promiseData = this.request.getPromiseData();
    promiseData.then((data)=>{console.log(data)});

    // async: rxjs, 比 promise 更強大，可中途撤回，發射多個值
    var rxjsData = this.request.getRxjsData();
    var rxjs = rxjsData.subscribe( (data)=>{console.log(data)} )

    setTimeout(() => {
      rxjs.unsubscribe(); // 取消訂閱
    }, 1000);


    // async: promise get data repeatly
    var promiseData_Repeat = this.request.getRepeatPromiseData();
    promiseData.then((data)=>{console.log(data)});

    // async: rxjs repeatly
    var rxjsData_Repeat = this.request.getRepeatRxjsData();
    var rxjs_repeats = rxjsData_Repeat.subscribe( (data)=>{console.log(data)} )


  }

}
