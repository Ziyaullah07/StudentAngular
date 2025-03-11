import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-student-information',
  imports: [FormsModule],
  templateUrl: './student-information.component.html',
  styleUrl: './student-information.component.css'
})
export class StudentInformationComponent {
 student : any = {
  "id":0,
  "name": "",
  "address": "",
  "division": ""
 }

customerArry : any [] =[];
 constructor(private  studSrvice : AuthService) {
  this.getStudent();
 }
 getStudent(){
  this.studSrvice.LoadStudent().subscribe((res:any)=>{
    this.customerArry =res;
  });
 }

 onSaveStudent(){
  debugger;
  this.studSrvice.CreateNewStudent(this.student).subscribe((res:any)=>{
    if(res){
      alert('Record saved');
      this.getStudent();
    }
    else{
      alert(res.message);
    }
  })
 }

 onDeleteStudent(id : any){
  const isDelete = confirm("are you sure want to delete");
  if(isDelete == true){
    this.studSrvice.DeleteStudent(id).subscribe((res:any)=>{
      if(res){
        alert('Record deleted');
        this.getStudent();
      }else{
        alert(res.message);
      }
     })
  }

 }

 onEdit(data: any){
this.student = data;
 }

 updateStudent(){
  debugger;
  this.studSrvice.EditStudent(this.student.id,this.student).subscribe((res:any)=>{
    if(res){
      alert('Record update');
      this.getStudent();
    }
    else{
      alert(res.message);
    }
  })
 }
}
