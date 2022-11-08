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
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataTableComponent,
    DoughnutChartComponent,
    BarChartComponent,
    DataCardsComponent,
    HeaderComponent,
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
   NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
