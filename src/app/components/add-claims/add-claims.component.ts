import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClaimsApiService } from 'src/app/claims-api.service';
import { ClaimsDetailsComponent } from '../claims-details/claims-details.component';

@Component({
  selector: 'app-add-claims',
  templateUrl: './add-claims.component.html',
  styleUrls: ['./add-claims.component.css']
})
export class AddClaimComponent implements OnInit {
  @Input() set selectedDataItems(item: any) {
    if (item.length > 0) {
      this.firstFormGroup.setValue({
        createdDate: item[0].date,
        // closedDate: item[0].dateClosed,
        customerClaim: item[0].claimedAmount,
        customer: item[0].date,
        facility: item[0].facility,
        // wmsAccount: item[0].masterAcct, claimType: item[0].claimType,
        // claimCategory: item[0].category,
        // status: item[0].status, priorityFlag: '',
        // commonType: '',
        // issueType: '',
      })
    }

  }
  firstFormGroup = this._formBuilder.group({
    createdDate: [new Date(), Validators.required],
    // closedDate: ['', Validators.required],
    customerClaim: [null],
    customer: ['', Validators.required],
    facility: ['', Validators.required],
    // wmsAccount: ['', Validators.required], claimType: ['', Validators.required],
    // claimCategory: ['', Validators.required],
    // status: ['', Validators.required], priorityFlag: ['', Validators.required],
    // commonType: ['', Validators.required],
    // issueType: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    notes: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    apVendor: ['', Validators.required], paidAmount: ['', Validators.required],
    paymentReference: ['', Validators.required], paymentDate: ['', Validators.required],
    invoiceNumber: ['', Validators.required], costCenter: ['', Validators.required],
    glCode: ['', Validators.required], accuralAmount: ['', Validators.required],
    invoiceAmount: ['', Validators.required], claimedAmount: ['', Validators.required],
    currencyType: ['', Validators.required],

  });
  fourthFormGroup = this._formBuilder.group({
    name: ['admin', Validators.required],
    phone: ['1111111111', Validators.required],
    email: ['admin@miracle', Validators.required],

  });
  fifthFormGroup = this._formBuilder.group({
    // appointmentID: ['', Validators.required], 
    // bol: ['', Validators.required],
    // receivedDate: ['', Validators.required], 
    amcReference: ['', Validators.required],
    customerReference: ['', Validators.required], 
    documentType: ['', Validators.required]
  })
  sixthFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],

  });
  seventhFormGroup = this._formBuilder.group({
    notes: ['', Validators.required]
  });
  eightFormGroup = this._formBuilder.group({
    name: ['', Validators.required],

  })
  isLinear = false;
  facilityList: string[] = [];
  customerList: string[] = [];
  customerReference: number[] = [];
  amcReference: number[] = [];
  
  constructor(private _formBuilder: FormBuilder, private http: ClaimsApiService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.facilityList = this.http.getFacility();
    this.customerList = this.http.getCustomer();
    this.customerReference = this.http.getCustomerReference();
    this.customerReference = this.http.getCustomerReference();
    this.amcReference = this.http.getAMCReference();
  }
  filterData() {
    this.customerReference = this.http.getCustomerReference().filter(item => item.toString().indexOf(this.fifthFormGroup.value.customerReference ? this.fifthFormGroup.value.customerReference : '') > -1)
    this.amcReference = this.http.getAMCReference().filter(item => item.toString().indexOf(this.fifthFormGroup.value.amcReference ? this.fifthFormGroup.value.amcReference : '') > -1)
  }
  checkAllFormsvalid() {
    let result = this.fifthFormGroup.status === 'VALID' && this.fourthFormGroup.status === 'VALID' && this.fifthFormGroup.status === 'VALID';
    return result;

  }

  retrunProgress() {
    let result = 0;
    if (this.firstFormGroup.status == 'VALID') {
      result += 12.5;
    }
    if (this.secondFormGroup.status == 'VALID') {
      result += 12.5;
    }
    if (this.thirdFormGroup.status == 'VALID') {
      result += 12.5;
    }
    if (this.fourthFormGroup.status == 'VALID') {
      result += 12.5;
    }
    if (this.fifthFormGroup.status == 'VALID') {
      result += 12.5;
    }
    if (this.sixthFormGroup.status == 'VALID') {
      result += 12.5;
    }
    if (this.seventhFormGroup.status == 'VALID') {
      result += 12.5;
    }
    if (this.eightFormGroup.status == 'VALID') {
      result += 12.5;
    }
    return result;
  }
  submitData(){
    const dialogRef = this.dialog.open(ClaimsDetailsComponent, { data: {orders:this.http.getOrders()}, autoFocus: false});

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
   }
}
