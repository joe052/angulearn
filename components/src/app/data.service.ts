import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["John Mathew","E345","joma.net"]
  info2: string[] = ["lora chloe","E350","loch.net"]
  info3: string[] = ["Joe trent","E245","jotr.net"]

  getInfo1(): string[]{
    return this.info1
  }

  getInfo2(): string[]{
    return this.info2
  }

  getInfo3(): string[]{
    return this.info3
  }

  addInfo(info: any){
    console.log(info);
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);
    return this.info1;
  }

  constructor() { }
}
