import { Component } from '@angular/core';

interface DocumentType {
  [key: string]: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
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
