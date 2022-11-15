import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
        closedDate: item[0].dateClosed,
        customerClaim: item[0].claimedAmount,
        customer: item[0].date,
        facility: item[0].facility,
        wmsAccount: item[0].masterAcct, claimType: item[0].claimType,
        claimCategory: item[0].category,
        status: item[0].status, priorityFlag: '',
        commonType: '',
        issueType: '',
      })
    }

  }
  firstFormGroup = this._formBuilder.group({
    createdDate: ['', Validators.required],
    closedDate: ['', Validators.required],
    customerClaim: [null, Validators.required],
    customer: ['', Validators.required],
    facility: ['', Validators.required],
    wmsAccount: ['', Validators.required], claimType: ['', Validators.required],
    claimCategory: ['', Validators.required],
    status: ['', Validators.required], priorityFlag: ['', Validators.required],
    commonType: ['', Validators.required],
    issueType: ['', Validators.required],
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
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],

  });
  fifthFormGroup = this._formBuilder.group({
    appointmentID: ['', Validators.required], bol: ['', Validators.required],
    receivedDate: ['', Validators.required], amcReference: ['', Validators.required],
    customerReference: ['', Validators.required], documentType: ['', Validators.required]
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
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  checkAllFormsvalid() {
    let result = this.fifthFormGroup.status === 'VALID' && this.secondFormGroup.status === 'VALID' && this.thirdFormGroup.status === 'VALID' && this.fourthFormGroup.status === 'VALID' && this.fifthFormGroup.status === 'VALID' && this.sixthFormGroup.status === 'VALID' && this.seventhFormGroup.status === 'VALID' && this.eightFormGroup.status === 'VALID'
    return result;

  }


}
