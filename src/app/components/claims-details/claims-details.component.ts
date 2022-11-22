import { isNgTemplate } from '@angular/compiler';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ClaimsApiService } from 'src/app/claims-api.service';

@Component({
  selector: 'app-claims-details',
  templateUrl: './claims-details.component.html',
  styleUrls: ['./claims-details.component.css']
})
export class ClaimsDetailsComponent implements OnInit, OnDestroy {
  ordersList: any = [];
  filteredColumns: any = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  claimAmount: any = {};
  userMode: string | null = 'user';
  firstFormGroup = this._formBuilder.group({
    createdDate: [new Date(), Validators.required],
    closedDate: ['', Validators.required],
    customerClaim: [9961],
    customer: ['', Validators.required],
    facility: ['', Validators.required],
    wmsAccount: ['', Validators.required], claimType: ['', Validators.required],
    claimCategory: ['', Validators.required],
    status: ['Open', Validators.required], priorityFlag: ['', Validators.required],
    commonType: ['', Validators.required],
    issueType: ['', Validators.required],
  });
  contactInformation = this._formBuilder.group({
    name: ['admin', Validators.required],
    phone: ['1111111111', Validators.required],
    email: ['admin@miracle', Validators.required],

  });
  costDetails = this._formBuilder.group({
    amountBasis: ['Product', Validators.required],
    cost: [0, Validators.required],
    currency: ['USD', Validators.required],

  });
  paymentInformation = this._formBuilder.group({
    apVendor: ['', Validators.required], paidAmount: ['', Validators.required],
    paymentReference: ['', Validators.required], paymentDate: ['', Validators.required],
    invoiceNumber: ['', Validators.required], costCenter: ['', Validators.required],
    glCode: ['',], accuralAmount: ['', Validators.required],
    invoiceAmount: [''], claimedAmount: [0, Validators.required],
    currencyType: ['', Validators.required],

  });
  additionalInfo = this._formBuilder.group({
    notes: [''], document: ['']

  });
  facilityList: string[] = [];
  customerList: string[] = [];
  constructor(public dialogRef: MatDialogRef<ClaimsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder, private http: ClaimsApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userMode = localStorage.getItem('userDetails') ? localStorage.getItem('userDetails') : 'user';
    this.facilityList = this.http.getFacility();
    this.customerList = this.http.getCustomer();
    setTimeout(() => {
      this.ordersList = this.data.orders;

    }, 500)
    this.filteredColumns = [{ "name": "Item", "props": "item", width: 60 }, { "name": "Description", props: "des" }, { "name": "Date Code", props: "dateCode" }, { "name": "LOT", props: "lot" }, { "name": "Quantity", props: "quantity" }, { "name": "LPN", props: "LPN" }, { "name": "NET", props: "NET" }];
    this.costDetails.controls['cost'].disable()
  }

  ngOnDestroy(): void {
    this._snackBar.open("Progress Saved", "Close");
  }
  addQuantity(e: any, row: any) {
    console.log(row);
    this.claimAmount[row.item] = e.target.value * 5;
    let total = 0;
    for (let amount of Object.keys(this.claimAmount)) {
      total += this.claimAmount[amount];
    }
    this.costDetails.setValue({
      amountBasis: this.costDetails.value.amountBasis ? this.costDetails.value.amountBasis : 'Product',
      cost: total,
      currency: this.costDetails.value.currency ? this.costDetails.value.currency : 'USD'
    })
    this.paymentInformation.controls.claimedAmount.setValue(total);
    this.paymentInformation.controls.currencyType.setValue(this.costDetails.value.currency ? this.costDetails.value.currency : 'USD');
  }
}
