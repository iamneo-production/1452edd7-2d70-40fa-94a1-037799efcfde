import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { AdminAppliedLoanService } from '../admin-applied-loan.service';

@Component({
  selector: 'app-generate-schedule',
  templateUrl: './generate-schedule.component.html',
  styleUrls: ['./generate-schedule.component.css']
})
export class GenerateScheduleComponent implements OnInit {
  emiData!:number;

  constructor(private sharedservice:UserServiceService,private router:Router,private adminService:AdminAppliedLoanService) 
  { 
    this.emiData=this.sharedservice.getEmi();
    console.log(this.emiData);
  }

  ngOnInit(): void {
  }
  conform()
  {
  window.alert("The Schedule has been Successfully Genearted");
  this.cancel();
  }
  cancel()
  {
     this.router.navigate(['admin/adminapprovedloan']);
  }

}
