import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';
import { DetailsModalComponent } from "./details-modal/details-modal.component"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
	@Input() rows: any[] = [];
	@Output() newItemEvent: any = new EventEmitter();
	@Input() showActions: boolean = true;
	sortingfilters = false;
	public columns = [{
		name: "Date",
		props: "date",
		type: "Date",
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
	}, {
		name: "Status",
		props: "status",
		type: "text",
		show: true
	}, {
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
	constructor(public dialog: MatDialog) {
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
		const dialogRef = this.dialog.open(DetailsModalComponent, { data: row });

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
	onSelect(e: any) {
		// if (JSON.stringify(e.selected) == JSON.stringify(this.mySelection)) {
		// 	this.selected = [];
		// 	this.mySelection = [];
		// } else {
		// 	this.mySelection = this.selected;
		// }

	}
	editItem() {
		this.newItemEvent.emit(this.selected);
	}
	filteredApplied(event:any,props:string){
		this.filteredRows = this.rows.filter(row=>{
			return row[props].indexOf(event.target.value) > -1;
		})
	}
}
