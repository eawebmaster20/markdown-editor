import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CreateModalService } from '../../services/create-modal.service';
import { DocumentsService } from '../../services/documents.service';
import { DocumentIterface } from '../interfaces/document';
import { CurrentDocumentService } from '../../services/current-document.service';

@Component({
  selector: 'app-create-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.scss'
})

export class CreateModalComponent {
  createModalService = inject(CreateModalService)
  currDocService = inject(CurrentDocumentService)

  newDocument: DocumentIterface = {
    createdAt: '',
    name: 'untitled-document.md',
    content: '',
    renderedText: ''
  };

  createDocument() {
    this.currDocService.addDocument(this.newDocument);
    this.newDocument = {
      createdAt : '',
      name:'untitled-document.md',
      content:'',
      renderedText:''
    }
    this.createModalService.hideModal()
  }


}
