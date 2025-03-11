import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { EmployeeInformationComponent } from './components/employee-information/employee-information.component';
import { StudentInformationComponent } from './components/student-information/student-information.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'employeeInformation', component: EmployeeInformationComponent },
  { path: 'studentInformation', component: StudentInformationComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
