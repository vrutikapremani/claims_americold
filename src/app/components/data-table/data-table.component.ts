import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';
import { DetailsModalComponent } from "./details-modal/details-modal.component"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import {ViewEncapsulation} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClaimsDetailsComponent } from '../claims-details/claims-details.component';
import { ClaimsApiService } from 'src/app/claims-api.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
	// encapsulation: ViewEncapsulation.None,
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
	@Input() rows: any[] = [];
	@Output() newItemEvent: any = new EventEmitter();
	@Input() showActions: boolean = true;
	sortingfilters = false;
	campaignOne = new FormGroup({
		start: new FormControl(new Date(year, month, 13)),
		end: new FormControl(new Date(year, month, 16)),
	  });
	  campaignTwo = new FormGroup({
		start: new FormControl(new Date(year, month, 15)),
		end: new FormControl(new Date(year, month, 19)),
	  });
	public columns = [{
		name: "Date",
		props: "date",
		type: "Date",
		show: true
	},{
		name: "Status",
		props: "status",
		type: "text",
		show: true
	}, {
		name: "Master Acct",
		props: "masterAcct",
		type: "text",
		show: true
	}, {
		name: "Facility",
		props: "facility",
		type: "text",
		show: true
	}, {
		name: "Account",
		props: "account",
		type: "text",
		show: true
	}, {
		name: "Amc Claim",
		props: "amcClaim",
		type: "text",
		show: true
	}, {
		name: "Claim Type",
		props: "claimType",
		type: "text",
		show: true
	}, {
		name: "Category",
		props: "category",
		type: "text",
		show: true
	},{
		name: "Claimed Amount",
		props: "claimedAmount",
		type: "number",
		show: false
	}, {
		name: "Paid Amount",
		props: "paidAmount",
		type: "number",
		show: false
	}, {
		name: "Date Closed",
		props: "dateClosed",
		type: "Date",
		show: false
	}, {
		name: "Carrier",
		props: "carrier",
		type: "text",
		show: false
	}, {
		name: "Load Number",
		props: "loadNumber",
		type: "number",
		show: false
	}];
	public filteredColumns:any;
	public ColumnMode = ColumnMode;
	public rowHeight = 40;
	public show = false;
	selected = [];
	mySelection = [];
	SelectionType = SelectionType;
	filteredRows:any[] = [];
	constructor(public dialog: MatDialog, private http: ClaimsApiService) {
	}

	ngOnInit(): void {
		this.filteredColumns = this.columns.filter(column => column.show === true);
		this.filteredRows = this.rows;
	}
	public togglecolumnCheckbox(column: any) {
		const isChecked = column.show;
		column.show = !isChecked;
		this.filteredColumns = this.columns.filter(item => item.show);
	}

	public onExportToExcel() {
		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredRows);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
		XLSX.writeFile(wb, 'claims.xlsx');
	}
	openDialog(row: any) {
		const dialogRef = this.dialog.open(DetailsModalComponent, { data: row, autoFocus: false});

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
	editItem(row:any) {
		const dialogRef = this.dialog.open(ClaimsDetailsComponent, { data: {orders:this.http.getOrders()}, autoFocus: false});

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
	filteredApplied(event:any,props:string){
		this.filteredRows = this.rows.filter(row=>{
			return row[props].indexOf(event.target.value) > -1;
		})
	}
}
