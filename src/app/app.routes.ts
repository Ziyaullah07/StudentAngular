import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { EmployeeInformationComponent } from './components/employee-information/employee-information.component';
import { StudentInformationComponent } from './components/student-information/student-information.component';
import { AppComponent } from './app.component';
import { LayOutComponent } from './components/lay-out/lay-out.component';
import { authGuard } from './components/guard/auth.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { 
    path:'',
    component:LayOutComponent, 
    children:[
    { path: 'dashbord', component: DashbordComponent, canActivate: [authGuard] },
    { path: 'employeeInformation', component: EmployeeInformationComponent },
    { path: 'studentInformation', component: StudentInformationComponent, canActivate: [authGuard]},
    { path: '**', redirectTo: 'login' }
  ]
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
