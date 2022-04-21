import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminappliedloanComponent } from './admin/adminappliedloan/adminappliedloan.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { AdminapprovedloanComponent } from './admin/adminapprovedloan/adminapprovedloan.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DeleteLoanComponent } from './admin/delete-loan/delete-loan.component';
import { EditLoanComponent } from './admin/edit-loan/edit-loan.component';
import { DeleteRepaymentScheduleComponent } from './admin/delete-repayment-schedule/delete-repayment-schedule.component';
import { EditRepaymentScheduleComponent } from './admin/edit-repayment-loan/edit-repayment-loan.component';
import { GenerateScheduleComponent } from './admin/generate-schedule/generate-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminappliedloanComponent,
    AdminhomepageComponent,
    AdminapprovedloanComponent,
    LoginComponent,
    DeleteLoanComponent,
    EditLoanComponent,
    DeleteRepaymentScheduleComponent,
    EditRepaymentScheduleComponent,
    GenerateScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
