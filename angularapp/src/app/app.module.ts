import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminappliedloanComponent } from './admin/adminappliedloan/adminappliedloan.component';
import { AdminapprovedloanComponent } from './admin/adminapprovedloan/adminapprovedloan.component';
import { DeleteLoanComponent } from './admin/delete-loan/delete-loan.component';
import { DeleteRepaymentScheduleComponent } from './admin/delete-repayment-schedule/delete-repayment-schedule.component';
import { EditLoanComponent } from './admin/edit-loan/edit-loan.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { GenerateScheduleComponent } from './admin/generate-schedule/generate-schedule.component';
import { EditRepaymentScheduleComponent } from './admin/edit-repayment-loan/edit-repayment-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminappliedloanComponent,
    AdminapprovedloanComponent,
    DeleteLoanComponent,
    DeleteRepaymentScheduleComponent,
    EditLoanComponent,
    EditRepaymentLoanComponent,
    GenerateScheduleComponent,
    LoginComponent,
    UserComponent,
    AdminhomepageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
