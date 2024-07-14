import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatIconModule, MatButtonModule, MatToolbarModule];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
