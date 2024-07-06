import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewComponent } from './components/preview/preview.component';
import { MarkdownPaneComponent } from './components/markdown-pane/markdown-pane.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';
import { PreviewTogglerService } from './services/preview-toggler.service';
import { CurrentDocumentService } from './services/current-document.service';
import { DocumentsService } from './services/documents.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    ConfirmDeleteModalComponent,
    SidebarComponent,
    MarkdownPaneComponent,
    PreviewComponent,
    CreateModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  toggleService = inject(PreviewTogglerService)
  documentService = inject(DocumentsService);
  currDocService = inject(CurrentDocumentService);
  ngOnInit() {
    if (
      localStorage.getItem('docList') &&
      localStorage.getItem('docList')!.length > 0
    ) {
      this.currDocService.documents = JSON.parse(localStorage.getItem('docList')!);
      let docLength= this.currDocService.documents.length
      this.currDocService.currDocument = this.currDocService.documents[docLength-1];
      this.currDocService.updateText();
      console.log(this.currDocService.currDocument);
      return;
    }
    this.documentService.getDocuments().subscribe((data) => {
      let docLength= data.length
      this.currDocService.documents = data
      this.currDocService.currDocument = this.currDocService.documents[docLength-1];
      localStorage.setItem('docList', JSON.stringify(data));
      this.currDocService.updateText();
      console.log('blav bla bla lbal bla ');
    });
  }
}
