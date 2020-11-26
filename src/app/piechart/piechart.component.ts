import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})

export class PiechartComponent implements OnInit {
  public data: Object[]
  public chartTitle : string
  public chartLabel : object
  public legend : Object 
  public tooltip : object

  constructor(private http : HttpClient ) { 
    this.chartTitle ='Pie chart representation for Users';
    
    this.data = [
      {
      "name": "latitude>0",
      "value": 20,
      "text": "30%"

      },
      {
        "name": "latitude<0",
        "value": 3 ,
        "text" :"70%"
      },
      {
        "name": "longitude>0",
        "value": 7,
        "text" :"50%"
      },
      {
        "name": "longitude<0",
        "value": 5,
        "text" :"50%"
      },
    ];

    this.chartLabel = {
      visible : true,
      position: 'Inside',
      name: "text"
    };

    this.legend ={
      visible: true,
      position : 'Top',
      height : '8%',
      width: '35%'
    }
    
    this.tooltip ={
      enable : true,
      format : '${point.x}:<b>${point.y}%</b>'
    }
  }



  ngOnInit(): void {
    let response = this.http.get('https://jsonplaceholder.typicode.com/users')
    //response.subscribe((res)=>this.dataSource = res)
  }

}
