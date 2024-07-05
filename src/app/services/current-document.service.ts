import { Injectable } from '@angular/core';
import { marked } from 'marked';
import { DocumentIterface } from '../components/interfaces/document';

@Injectable({
  providedIn: 'root',
})
export class CurrentDocumentService {
  documents: DocumentIterface[] = [];
  currDocument:DocumentIterface = {name:'',content:"",renderedText:marked.parse(''),createdAt:""};
  constructor() {
  }
  updateText() {
    this.currDocument.renderedText = marked.parse(this.currDocument.content);
  }
  setCurrDocument(document: DocumentIterface) {

    this.currDocument = document;
    this.updateText()
  }
  deleteCurrDocument() {
    this.documents = this.documents.filter(
      (doc) => doc.name !== this.currDocument.name
    );
  }
}
