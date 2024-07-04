import { Component } from '@angular/core';
import { ThemeTogglerComponent } from '../theme-toggler/theme-toggler.component';

interface DocumentType {
  [key: string]: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ThemeTogglerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  files: DocumentType[] = [
    {
      time: '01 April 2022',
      title: 'untitled-document.md',
    },
    {
      time: '01 April 2022',
      title: 'welcome.md',
    },
  ];
}
