import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-claims',
  templateUrl: './add-claims.component.html',
  styleUrls: ['./add-claims.component.css']
})
export class AddClaimComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    createdDate: ['', Validators.required],
    closedDate: ['', Validators.required],
    customerClaim: [null, Validators.required],
    customer: ['', Validators.required],
    facility: ['', Validators.required],
    wmsAccount: ['', Validators.required], claimType: ['', Validators.required], claimCategory: ['', Validators.required], status: ['', Validators.required], priorityFlag: ['', Validators.required], commonType: ['', Validators.required],
    issueType: ['', Validators.required],
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


}
