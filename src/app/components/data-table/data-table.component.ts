import { Component, OnInit,Input } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
	@Input() rows: any[] = [];
  // rows: any = [];
  columns = [{
		name: "Date",
		props: "date",
		show: true
	}, {
		name: "Master Acct",
		props: "masterAcct",
		show: true
	}, {
		name: "Facility",
		props: "facility",
		show: true
	}, {
		name: "Account",
		props: "account",
		show: true
	}, {
		name: "Amc Claim",
		props: "amcClaim",
		show: true
	}, {
		name: "Claim Type",
    props: "claimType",
		show: true
	}, {
		name: "Category",
    props: "category",
		show: true
	}, {
		name: "Status",
    props: "status",
		show: true
	}, {
		name: "Claimed Amount",
    props: "claimedAmount",
		show: false
	}, {
		name: "Paid Amount",
    props: "paidAmount",
		show: false
	}, {
		name: "Date Closed",
    props: "dateClosed",
		show: false
	}, {
		name: "Carrier",
    props: "carrier",
		show: false
	}, {
		name: "Load Number",
    props: "loadNumber",
		show: false
	}];
  ColumnMode = ColumnMode;
  selectedColumns = this.columns.filter(item => item.show);
  rowHeight = 40;
  show = false;
  constructor() {
  }

  ngOnInit(): void {
  }
  checkFilters(show:boolean){
    // if(show){
      this.selectedColumns = this.columns.filter(item => item.show);

    // }
  }
  public togglecolumnCheckbox(column:any) {
    const isChecked = column.show;
      column.show = !isChecked;
      this.selectedColumns = this.columns.filter(item => item.show);
  }

}
