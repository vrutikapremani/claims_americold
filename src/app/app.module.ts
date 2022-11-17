import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataCardsComponent } from './components/data-cards/data-cards.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import {MatToolbarModule} from '@angular/material/toolbar';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxPrintModule} from 'ngx-print';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddClaimComponent } from './components/add-claims/add-claims.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginComponent } from './components/login/login.component';
import { DetailsModalComponent } from './components/data-table/details-modal/details-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ClaimsApiService } from './claims-api.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ClaimsDetailsComponent } from './components/claims-details/claims-details.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataTableComponent,
    DoughnutChartComponent,
    BarChartComponent,
    DataCardsComponent,
    HeaderComponent,
    AddClaimComponent,
    LoginComponent,
    DetailsModalComponent,
    ClaimsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    ChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,MatBottomSheetModule,
   NgxDatatableModule,
   MatSlideToggleModule,
   NgxPrintModule,
   MatDialogModule,
   MatProgressBarModule,
   MatTooltipModule,
   MatAutocompleteModule,
   MatSnackBarModule
  ],
  providers: [ClaimsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
