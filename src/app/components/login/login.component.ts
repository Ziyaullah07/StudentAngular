import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

constructor(private authService: AuthService, private router: Router) {}

login(): void {
  this.authService.login(this.username, this.password).subscribe({
    next: () => this.router.navigate(['/dashbord']),
    error: () => this.errorMessage = 'Invalid credentials'
  });
}

//Hardcoded code
// login(): void {
//   debugger;
//   if (this.authService.login(this.username, this.password)) {
//     debugger;
//     this.router.navigate(['/dashbord']);
//   } else {
//     this.errorMessage = 'Invalid credentials';
//   }
// }

}
