import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.css']
})
export class DataCardsComponent implements OnInit {
  @Input() rowData: any[] = [];
  public facilities: any;
  public customers: any;
  public claims: any;
  public claimAmount = 0;
  public paidAmount = 0;

  constructor() { }

  ngOnInit(): void {
    console.log("row", this.rowData)
    this.initFilter();
  }
  public initFilter(): void {
this.facilities = Array.from(new Set(this.rowData.map(({ facility }) => facility)));
this.customers = Array.from(new Set(this.rowData.map(({ masterAcct }) => masterAcct)));
this.rowData.forEach(element => {
  let amount =  +element.claimedAmount.substring(1);
  console.log (amount + this.claimAmount)
  this.claimAmount+= +amount;
});
// this.claimAmount = this.rowData.reduce((total:any, current:any) => current.dateClosed+total,0)
console.log(this.claimAmount)
  }
}
