import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})


export class ThemeTogglerComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}