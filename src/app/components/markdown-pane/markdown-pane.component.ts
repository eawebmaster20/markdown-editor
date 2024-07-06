import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentsService } from '../../services/documents.service';
import { PreviewTogglerService } from '../../services/preview-toggler.service';
import { CurrentDocumentService } from '../../services/current-document.service';
import { DocumentIterface } from '../interfaces/document';

@Component({
  selector: 'app-markdown-pane',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './markdown-pane.component.html',
  styleUrl: './markdown-pane.component.scss',
})
export class MarkdownPaneComponent {
  documentService = inject(DocumentsService);
  toggleService = inject(PreviewTogglerService);
  currDocService = inject(CurrentDocumentService);
  ngOnInit() {
    if (
      localStorage.getItem('docList') &&
      localStorage.getItem('docList')!.length > 0
    ) {
      this.currDocService.documents = JSON.parse(localStorage.getItem('docList') || '');
      this.currDocService.currDocument = this.currDocService.documents[1];
      this.currDocService.updateText();
      console.log(this.currDocService.currDocument);
      console.log('data found in local storage');
      return;
    }
    this.documentService.getDocuments().subscribe((data) => {
      this.currDocService.currDocument = data[1];
      localStorage.setItem('docList', JSON.stringify(data));
      this.currDocService.updateText();
      console.log('blav bla bla lbal bla ');
      
    });
  }
}
