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
  }
}
