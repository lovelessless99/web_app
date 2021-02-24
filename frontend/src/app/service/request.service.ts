import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
// import { setInterval } from 'timers';

// import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步方法
  get_Data(){
     return "This is a service";
  }

  // 回呼函數得到非同步參數
  getCallBackData(cb:any){
      setTimeout(
        () => {
          var name = "Lawrence"; 
          cb(name);
          // return name;    
        }
      , 1000 );
  }

  // Promise 函數得到非同步參數
  getPromiseData(){
      return new Promise((fun)=>{
          setTimeout(()=>{
            var username = "Promise Lawrence";
            fun(username);
          }, 3000)
      })
  }

  // Promise 和 rxjs 相似
  getRxjsData(){
    return new Observable((observer)=>{
        setTimeout(()=>{
          var username = "Rxjs Lawrence";
          observer.next(username); // return data
          observer.error(username);
        }, 3000)
    })
  }


  
  getRepeatRxjsData(){
    return new Observable((observer)=>{
        setInterval(()=>{
          var username = "Rxjs Lawrence Repeat";
          observer.next(username); // return data
          observer.error(username);
        }, 1000)
    })
  }

  // Promise 沒有這個能力
  getRepeatPromiseData(){
    return new Observable((observer)=>{
        setInterval(()=>{
          var username = "Promise Lawrence Repeat";
          observer.next(username); // return data
          observer.error(username);
        }, 1000)
    })
  }
}
