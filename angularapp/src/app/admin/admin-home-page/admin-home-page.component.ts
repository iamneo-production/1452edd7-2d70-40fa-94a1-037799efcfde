import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
  value:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logOut()
  {
    this.value=window.confirm("Do you want to LogOut ?");
    if(this.value==true)
    {
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['admin/adminhomepage']);
    }
  }


}
