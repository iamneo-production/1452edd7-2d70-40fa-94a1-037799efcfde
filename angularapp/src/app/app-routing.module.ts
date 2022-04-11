import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomePageComponent } from './admin/admin-home-page/admin-home-page.component';
import { AdminappliedloanComponent } from './admin/adminappliedloan/adminappliedloan.component';
import { AdminapprovedloanComponent } from './admin/adminapprovedloan/adminapprovedloan.component';
import { LogOutComponent } from './log-out/log-out.component';

const routes: Routes = [
  {path:'admin/adminhomepage', component:AdminHomePageComponent},
  {path:'admin/adminappliedloan', component: AdminappliedloanComponent},
  {path:'admin/adminapprovedloan', component: AdminapprovedloanComponent},
  {path:'login', component:LogOutComponent},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
