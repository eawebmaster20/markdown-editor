import { Component, inject } from '@angular/core';
import { DocumentsService } from '../../services/documents.service';
import { SidebarService } from '../../services/sidebar.service';
import { CurrentDocumentService } from '../../services/current-document.service';
import { ThemeTogglerComponent } from '../theme-toggler/theme-toggler.component';
import { DocumentIterface } from '../interfaces/document';


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


  // documents: Document[] = [];

  documents: DocumentIterface[] = [];

  documentsService = inject(DocumentsService);

  // ngOnInit() {
  //   this.documentsService
  //     .getDocuments()
  //     .subscribe((data) => (this.documents = data));
  // }

  handleDocumentClick(document: DocumentIterface) {
    this.currDocService.setCurrDocument(document);
  }
}
