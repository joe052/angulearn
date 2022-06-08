import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers: [DataService]
})
export class EInfoComponent implements OnInit {

  inforeceived1: string[] = [];
  inforeceived2: string[] = [];
  inforeceived3: string[] = [];

  constructor(private dService: DataService) { }

  getInfo1(){
    this.inforeceived1 = this.dService.getInfo1();
  }

  getInfo2(){
    this.inforeceived2 = this.dService.getInfo2();
  }

  getInfo3(){
    this.inforeceived3 = this.dService.getInfo3();
  }

  updateInfo(frm: any){
    this.dService.addInfo(frm.value.location);
  }

  ngOnInit(): void {
  }

}
