import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminappliedloanComponent } from './admin/adminappliedloan/adminappliedloan.component';
import { AdminapprovedloanComponent } from './admin/adminapprovedloan/adminapprovedloan.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { LoginComponent } from './login/login.component';
import { DeleteLoanComponent } from './admin/delete-loan/delete-loan.component';
import { EditLoanComponent } from './admin/edit-loan/edit-loan.component';
import { DeleteRepaymentScheduleComponent } from './admin/delete-repayment-schedule/delete-repayment-schedule.component';
import { EditRepaymentScheduleComponent } from './admin/edit-repayment-loan/edit-repayment-loan.component';
import { GenerateScheduleComponent } from './admin/generate-schedule/generate-schedule.component';


const routes: Routes = [
  {path:'admin/adminhomepage', component:AdminhomepageComponent},
  {path:'admin/adminappliedloan', component: AdminappliedloanComponent},
  {path:'admin/adminapprovedloan', component: AdminapprovedloanComponent},
  {path:'login', component:LoginComponent},
  {path:'admin/deleteLoan/:id', component: DeleteLoanComponent},
  {path:'admin/editLoan/:id',component:EditLoanComponent},
  {path:'admin/generateSchedule', component:GenerateScheduleComponent},
  {path:'admin/editRepaymetSchedule/:id', component:EditRepaymentScheduleComponent},
  {path:'admin/deleteRepaymentSchedule/:id', component:DeleteRepaymentScheduleComponent},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
