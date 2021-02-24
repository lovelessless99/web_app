import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  constructor(public http:HttpClient) { }

  public people_list:any[] = [];

  // 用雙向數據綁定的好處就是不用getElementId
  public people:any = {
    username:'',
    sex: '',
    cities_List: ['Taipei', 'Keelung', 'Taichung'],
    city: '',
    hobby: [
      { title: "打球", checked : false },
      { title: "走路", checked : false },
      { title: "下棋", checked : false },
    ]
  }

  Upload(){
      console.log(this.people);
      this.sendData(this.people);
      this.getData();
      
  }

  getData(){
    // alert('執行get請求');
    let api = "http://0.0.0.0:8081/get_table"
    
    // rxjs
    this.http.get(api).subscribe((response:any)=>{
        this.people_list = response;
        console.log(this.people_list);
    })
  }


  sendData(data:any){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    // let api = "frontend_net:8081/form"
    let api = "http://0.0.0.0:8081/form"
    this.http.post(api, data, httpOptions)
             .subscribe((response)=>{ console.log(response); });
  }

  onContentChanged(event:any){
    let playerName : string = event.target.textContent;
  }
  ngOnInit(): void {
  }

}
