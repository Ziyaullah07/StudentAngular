import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { LayOutComponent } from './components/lay-out/lay-out.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent,RouterLink,LayOutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-login';
}
