import { Component, OnInit, Input } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import * as XLSX from 'xlsx';
import { DetailsModalComponent } from "./details-modal/details-modal.component"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
	@Input() rows: any[] = [];

	public columns = [{
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
	public filteredColumns = [{
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
	public ColumnMode = ColumnMode;
	public selectedColumns = this.columns.filter(item => item.show);
	public rowHeight = 40;
	public show = false;
	constructor(public dialog: MatDialog) {
	}

	ngOnInit(): void {
		this.filteredColumns = this.filteredColumns.filter(column => column.show === true)
	}
	checkFilters(show: boolean) {
		this.selectedColumns = this.columns.filter(item => item.show);
	}
	public togglecolumnCheckbox(column: any) {
		const isChecked = column.show;
		column.show = !isChecked;
		this.selectedColumns = this.columns.filter(item => item.show);
	}

	public onExportToExcel() {
		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.rows);
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
}
