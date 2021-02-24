import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { Console } from 'console';
@Component({
  selector: 'app-http-com',
  templateUrl: './http-com.component.html',
  styleUrls: ['./http-com.component.scss']
})
export class HttpComComponent implements OnInit {
  public list:Array<any> = [];
  constructor(public http:HttpClient) { 

  }

  getData(){
    // alert('執行get請求');
    let api = "http://0.0.0.0:8081/array_dict"
    
    // rxjs
    this.http.get(api).subscribe((response:any)=>{
        console.log(response);
        this.list = response.result;
    })
  }


  sendData(){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    let api = "http://0.0.0.0:8081/try/login"
    this.http.post(api, {'username': 'lawrence', 'password': 'love'}, httpOptions)
             .subscribe((response)=>{
               console.log(response);
             });

    this.http.post(api, {'username': 'lawrence', 'password': 'loveless'}, httpOptions)
    .subscribe((response)=>{
      console.log(response);
    });

    this.http.post(api, {'username': 'lawrence'}, httpOptions)
    .subscribe((response)=>{
      console.log(response);
    });
  }
  ngOnInit(): void {
  
  }

}
