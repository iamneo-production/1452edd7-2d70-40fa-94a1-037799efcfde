import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AdminAppliedLoanService } from '../admin-applied-loan.service';
import { AdminModel } from '../admin-model';
import { Injectable } from '@angular/core'; // at top
import { UserServiceService } from 'src/app/user-service.service';

@Injectable({
  providedIn: 'root' // just before your class
})

@Component({
  selector: 'app-adminapprovedloan',
  templateUrl: './adminapprovedloan.component.html',
  styleUrls: ['./adminapprovedloan.component.css']
})
export class AdminapprovedloanComponent {

  public admindata:AdminModel[]=[];

//for search variables
public msg:any;
public searchUser:String="";
  constructor(private adminappliedloan:AdminAppliedLoanService,private router:Router,private service:UserServiceService){}
  ngOnInit(): void {
  }
public getappliedLoans()
{
  this.adminappliedloan.appliedLoan().subscribe(data=>{
    this.admindata=data;
  });
}
 //for searching the user
 public searchuser()
  {
    this.getappliedLoans();
  }

  //for deleting the loan
 deleteLoan(id:number)
  {
    this.router.navigate(['/admin/deleteLoan',id]);
  }

  //for editing the editing the loan
  editLoan(id:number)
  {
    this.router.navigate(['/admin/editLoan',id]);
  }
  //for generating schedule
  generateEmi(id:number)
  {
    this.adminappliedloan.generateSchedule(id).subscribe(data=>{
     this.msg=data;
    });
  }
  //for editing the repayment Schedule
  editRepaymentLoan(id:number)
  {
    this.router.navigate(['/admin/editRepaymetSchedule',id]);
  }
  //for delete-repayment-schedule
  deleteRepaymentSchedule(id:number)
  {
    this.router.navigate(['/admin/deleteRepaymentSchedule',id]);
  }
}
