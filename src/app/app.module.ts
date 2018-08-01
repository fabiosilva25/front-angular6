import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// We load the angular animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// We load the material Module
import { MaterialModule } from './material';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { MyTableComponent } from './my-table/my-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
