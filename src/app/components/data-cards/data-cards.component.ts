import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
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
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor() { }

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
}
