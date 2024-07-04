import { Component, inject } from '@angular/core';
import { ThemeTogglerComponent } from '../theme-toggler/theme-toggler.component';
import { DocumentsService } from '../../services/documents.service';
import { SidebarService } from '../../services/sidebar.service';
import { CurrentDocumentService } from '../../services/current-document.service';

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
  sidebarService = inject(SidebarService);
  currDocService = inject(CurrentDocumentService);

  documents: Document[] = [];
  documentsService = inject(DocumentsService);

  ngOnInit() {
    this.documentsService
      .getDocuments()
      .subscribe((data) => (this.documents = data));
  }

  handleDocumentClick(document: Document) {
    this.currDocService.setCurrDocument(document);
  }
}
