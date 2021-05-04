import { StepService } from './../services/step.service';
import { Component, OnInit } from '@angular/core';
import { HaversineService, GeoCoord } from "ng2-haversine";
import "@angular/compiler";
import { Color } from 'ng2-charts';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  

  distancedata: any
  

  constructor(public stepService:StepService,private _haversineService: HaversineService) { }

  ngOnInit(): void {
    this.fetchData()

  }


  


  fetchData(){
    this.stepService.getdata().subscribe(
      res=>{
        let days = []
        let distance = []
        let dateList = []
        let timestampList = []

        this.distancedata = res
        this.distancedata.forEach(element => {
          
            
          //JSON.parse(this.distancedata.valueInput).data.forEach(({double_latitude, double_longitude}) => console.log(double_latitude, double_longitude))
          let datastr = String(element.data).split("'double_latitude': ",)
          let data = datastr[1]
          if (res.double_latitude != 0 ) {
          days.push(parseInt(data))
          
          let timestamp = new Date(element.timestamp)
          timestampList.push(timestamp)
          let timeList = timestamp.toString().split(" ")
          let timeStr = timeList[0]
          dateList.push(timeStr)
        }
        });

       
        this.barChartLabels=dateList.slice(0, 10);
        this.barChartData[0].data=days

        let distanceSum = 0
        distance.forEach(element => {
          distanceSum+=parseInt(element)
        });
        this.distancedata
       
        

      },
      error=>{console.log("Error >> ",error)}

      
    )
  }
  
  Haversine(): void {
 
    let p1: GeoCoord = {
        latitude: 40.416775,
        longitude: -3.703790
    };
 
    let p2: GeoCoord = {
        latitude: 43.262985,
        longitude: -2.935013
    };
 
    let meters = this._haversineService.getDistanceInMeters(p1, p2);
    let kilometers = this._haversineService.getDistanceInKilometers(p1, p2);
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      
      xAxes: [
       {
           display: true,
           ticks: {
            autoSkip: true,
            maxTicksLimit: 10
        }
       }
     ],
   }
  };
  public barChartColors: Color[] = [
    { backgroundColor: '#0095ff' },
  ]
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Step'},
    
    
  ];


}
