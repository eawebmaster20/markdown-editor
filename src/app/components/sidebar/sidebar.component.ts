import { Component, inject } from '@angular/core';
import { ThemeTogglerComponent } from '../theme-toggler/theme-toggler.component';
import { DocumentsService } from '../../services/documents.service';

interface Document {
  createdAt: string;
  name: string;
  content: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ThemeTogglerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  // files: DocumentType[] = [
  //   {
  //     time: '01 April 2022',
  //     title: 'untitled-document.md',
  //   },
  //   {
  //     time: '01 April 2022',
  //     title: 'welcome.md',
  //   },
  // ];
  documents: Document[] = [];
  documentsService = inject(DocumentsService);

  ngOnInit() {
    this.documentsService
      .getDocuments()
      .subscribe((data) => (this.documents = data));
  }
}
