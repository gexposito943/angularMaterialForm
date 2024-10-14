import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignUpComponent } from "./components/user/sign-up/sign-up.component";
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SignUpComponent, MatRadioModule], // Agregado MatRadioModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrige styleUrl a styleUrls
})
export class AppComponent {
  title = 'regUsuari';
}
