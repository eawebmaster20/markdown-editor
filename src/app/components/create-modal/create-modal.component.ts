import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateModalService } from '../../services/create-modal.service';
import { DocumentsService } from '../../services/documents.service';
import { DocumentIterface } from '../interfaces/document';
import { CurrentDocumentService } from '../../services/current-document.service';

@Component({
  selector: 'app-create-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})

export class CreateModalComponent {
  createModalService = inject(CreateModalService);
  currDocService = inject(CurrentDocumentService);
  disabled: boolean = false;

  newDocument: DocumentIterface = {
    createdAt: '',
    name: '',
    content: '',
    renderedText: ''
  };

  createDocument() {
    if (this.newDocument.name.trim() !== '') {
      this.currDocService.addDocument(this.newDocument);
      this.newDocument = {
        createdAt: '',
        name: '',
        content: '',
        renderedText: ''
      };
      this.createModalService.hideModal();
      this.disabled = false; // Reset disabled state
    } else {
      this.disabled = true;
    }
  }

  validateInput() {
    this.disabled = this.newDocument.name.trim() === '';
  }
}
