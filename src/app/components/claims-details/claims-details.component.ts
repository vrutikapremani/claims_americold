import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ClaimsApiService } from 'src/app/claims-api.service';

@Component({
  selector: 'app-claims-details',
  templateUrl: './claims-details.component.html',
  styleUrls: ['./claims-details.component.css']
})
export class ClaimsDetailsComponent implements OnInit,OnDestroy {
  ordersList:any=[];
  filteredColumns:any=[];
  ColumnMode = ColumnMode;
  firstFormGroup = this._formBuilder.group({
    createdDate: [new Date(), Validators.required],
    closedDate: ['', Validators.required],
    customerClaim: [null],
    customer: ['', Validators.required],
    facility: ['', Validators.required],
    wmsAccount: ['', Validators.required], claimType: ['', Validators.required],
    claimCategory: ['', Validators.required],
    status: ['Open', Validators.required], priorityFlag: ['', Validators.required],
    commonType: ['', Validators.required],
    issueType: ['', Validators.required],
  });
  facilityList: string[] = [];
  customerList: string[] = [];
  constructor( public dialogRef: MatDialogRef<ClaimsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private _formBuilder: FormBuilder, private http: ClaimsApiService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.facilityList = this.http.getFacility();
    this.customerList = this.http.getCustomer();
    this.ordersList = this.data.orders;
    this.filteredColumns = [{"name":"item"},{"name":"des"},{"name":"dateCode"},{"name":"lot"},{"name":"quantity"},{"name":"LPN"},{"name":"NET"}];
 
  }

  ngOnDestroy(): void {
    this._snackBar.open("Progress Saved", "Close");
  }

}
