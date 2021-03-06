import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { GridsterModule } from 'angular-gridster2';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import {GrowlModule} from 'primeng/growl';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridsterModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    ChartModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
