import { Component, input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ButtonComponent } from "../button/button.component";


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  heading=input.required<string>()
}
