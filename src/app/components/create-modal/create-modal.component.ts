import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CreateModalService } from '../../services/create-modal.service';
import { DocumentsService } from '../../services/documents.service';
import { DocumentIterface } from '../interfaces/document';

@Component({
  selector: 'app-create-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.scss'
})

export class CreateModalComponent {
  createModalService = inject(CreateModalService)
  documentsService = inject(DocumentsService)

  newDocument: DocumentIterface = {
    createdAt: '',
    name: '',
    content: '',
    renderedText: ''
  };

  addDocument() {
    this.documentsService.addDocument(this.newDocument);
  }

  createDocument(){
    this.createModalService.hideModal()
    this.addDocument()
    console.log(this.newDocument)
    this.newDocument.name=''
  }
}
