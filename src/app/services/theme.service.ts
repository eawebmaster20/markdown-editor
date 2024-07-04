
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: 'light-theme' | 'dark-theme';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.activeTheme = (savedTheme as 'light-theme' | 'dark-theme') || 'light-theme';
    document.body.className = this.activeTheme;
  }

  setTheme(theme: 'light-theme' | 'dark-theme') {
    this.activeTheme = theme;
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    this.setTheme(this.activeTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  getTheme() {
    return this.activeTheme;
  }

}


