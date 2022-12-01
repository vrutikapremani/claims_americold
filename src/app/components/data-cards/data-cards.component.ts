import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
// import { MatSelectChange } from "@angular/material/select";
@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.css']
})
export class DataCardsComponent implements OnInit {
  @Input() rowData: any[] = [];
  @Output() year:any=new EventEmitter();
  public facilities: any;
  public customers: any;
  public claims: any;
  public claimAmount = 0;
  public paidAmount = 0;
  number:any=[];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  selectedData: any;
  facility: any = [];
  facilityData: any;
  masterData: any = [];
  count: any;
  uniqueChars: any = [];
  claimed: any = [];
  paied: any = [];
  amountdata: any = [];
  amountdata1: any = [];
  totclaimamount: any = [];
  totpaidamount: any = [];
  constructor() {}

  ngOnInit(): void {
    this.initFilter();
  }
  public initFilter(): void {
    this.facilities = Array.from(new Set(this.rowData.map(({ facility }) => facility)));
    this.customers = Array.from(new Set(this.rowData.map(({ masterAcct }) => masterAcct)));
    this.rowData.forEach(element => {
      let amount = typeof element.claimedAmount === 'string' ? +element.claimedAmount.substring(1) : element.claimedAmount;
      let paidAmount = +element.paidAmount.substring(1);
      this.claimAmount += amount ? amount : 0;
      this.paidAmount += paidAmount ? paidAmount : 0;
    });
  }

  yearrange(event:any){
    this.selectedData = {
      value: event.value,
      text: event.source.triggerValue
    };
    this.year.emit(this.selectedData)
  }
  changeFacility(e: any) {
    this.masterData = [];
    this.claimed = [];
    this.paied = [];
    for (let i = 0; i < this.rowData.length - 1; i++) {
      if (this.rowData[i].facility === e.value) {
        this.masterData.push(this.rowData[i].masterAcct)
 
        this.uniqueChars = [...new Set(this.masterData)];
        this.count = this.uniqueChars.length
 
        var b = this.rowData[i].claimedAmount
        this.claimed.push(b)
        var arrayInt = this.claimed.map(String)
        arrayInt.forEach((el: any, i: any, arr: any) => {
          arr[i] = el.replace(/[^0-9.]/g, '');
        });
        console.log(arrayInt);
        this.amountdata = arrayInt.map(Number);
        console.log(this.amountdata, "claimamount");

        var totalclaimAmount=0
        const map1 = this.amountdata.map((x: any) => totalclaimAmount += x);
        console.log(totalclaimAmount, "totalclaimamount");
        this.claimAmount=totalclaimAmount

        var t = this.rowData[i].paidAmount
        this.paied.push(t)
        var arrayInt1 = this.paied.map(String)
        arrayInt1.forEach((el: any, i: any, arr: any) => {
          arr[i] = el.replace(/[^0-9.]/g, '');
        });
        this.amountdata1 = arrayInt1.map(Number);
        console.log(this.amountdata1, "paidamount");

        var totalpaidAmount = 0
    const map2 = this.amountdata1.map((x: any) => totalpaidAmount += x);
    console.log(totalpaidAmount, "totalpaidamount");
    this.paidAmount=totalpaidAmount
        
      }
    }
  }
  
}