import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { StudentInformationComponent } from '../student-information/student-information.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { EmployeeInformationComponent } from '../employee-information/employee-information.component';

@Component({
  selector: 'app-lay-out',
  imports: [RouterOutlet,RouterLink,StudentInformationComponent,DashbordComponent,EmployeeInformationComponent],
  templateUrl: './lay-out.component.html',
  styleUrl: './lay-out.component.css'
})
export class LayOutComponent {

  router =inject(Router)
  LogOut(){
    debugger;
    localStorage.removeItem("jwtToken");
    this.router.navigateByUrl("login");
  }
}
