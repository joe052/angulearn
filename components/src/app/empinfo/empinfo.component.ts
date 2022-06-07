import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css'],
  providers: [RecordsService]
})
export class EmpinfoComponent implements OnInit {

  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  getInfoFromServiceClass1(){
    this.infoReceived1 = this.rservice.getinfo1();
  }

  getInfoFromServiceClass2(){
    this.infoReceived2 = this.rservice.getinfo2();
  }

  getInfoFromServiceClass3(){
    this.infoReceived3 = this.rservice.getinfo3();
  }

  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}
