import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  schoolsCnt = 0;
  hospitalsCnt = 0;
  banksCnt = 0;
  isWidgetOneSpinner = false;
  isWidgetTwoSpinner = false;
  isWidgetThreeSpinner = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.isWidgetOneSpinner = true;
    this.isWidgetTwoSpinner = true;
    this.isWidgetThreeSpinner = true;
    this.getData();
  }

  getData() {
    // this.dataService.getWidgetOneData().subscribe((data) => {
    //   this.schoolsCnt = data;
    //   this.isWidgetOneSpinner = false;
    // });
    // this.dataService.getWidgetTwoData().subscribe((data) => {
    //   this.hospitalsCnt = data;
    //   this.isWidgetTwoSpinner = false;
    // });
    // this.dataService.getWidgetThreeData().subscribe((data) => {
    //   this.banksCnt = data;
    //   this.isWidgetThreeSpinner = false;
    // });

    //accessing all 3 observables in one subscriptin to the forkJoin returned by getAllData in dataService
    this.dataService.getAllData().subscribe((returnedForkJoin)=>{
      this.schoolsCnt = returnedForkJoin[0];
      this.isWidgetOneSpinner=false; 
      this.hospitalsCnt = returnedForkJoin[1];
      this.isWidgetTwoSpinner=false;
      this.banksCnt = returnedForkJoin[2];
      this.isWidgetThreeSpinner=false;
    })
    
  }

}
