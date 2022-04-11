import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminappliedloanComponent } from './admin/adminappliedloan/adminappliedloan.component';
import { AdminapprovedloanComponent } from './admin/adminapprovedloan/adminapprovedloan.component';
import { AdminHomePageComponent } from './admin/admin-home-page/admin-home-page.component';
import { EditLoanComponent } from './admin/edit-loan/edit-loan.component';
import { DeleteLoanComponent } from './admin/delete-loan/delete-loan.component';
import { EditRepaymentScheduleComponent } from './admin/edit-repayment-schedule/edit-repayment-schedule.component';
import { DeleteRepaymentScheduleComponent } from './admin/delete-repayment-schedule/delete-repayment-schedule.component';
import { GenerateScheduleComponent } from './admin/generate-schedule/generate-schedule.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminappliedloanComponent,
    AdminapprovedloanComponent,
    AdminHomePageComponent,
    EditLoanComponent,
    DeleteLoanComponent,
    EditRepaymentScheduleComponent,
    DeleteRepaymentScheduleComponent,
    GenerateScheduleComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
