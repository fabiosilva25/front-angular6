import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';
import { InitComponent } from 'src/app/modules/dashboard/init/init.component';
import { MyTableComponent } from 'src/app/my-table/my-table.component';


const routes: Routes = [
  {
    path: 'init',
    component: InitComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: MyTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
