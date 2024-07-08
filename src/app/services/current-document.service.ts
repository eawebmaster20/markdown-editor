import { inject, Injectable, OnInit } from '@angular/core';
import { marked } from 'marked';
import { DocumentIterface } from '../components/interfaces/document';
import { DocumentsService } from './documents.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentDocumentService{

  documents: DocumentIterface[] = [];
  inEditMode:boolean = false
  documentService = inject(DocumentsService)
  currDocument:DocumentIterface = {name:'',content:"",renderedText:marked.parse(''),createdAt:""};

  updateText() {
    this.currDocument.renderedText = marked.parse(this.currDocument.content);
  }

  setCurrDocument(document: DocumentIterface) {
    this.currDocument = document;
    this.updateText()
  }

  deleteCurrDocument() {
    this.documents.splice(this.documents.indexOf(this.currDocument), 1)
    this.currDocument = this.documents[this.documents.length-1]
    localStorage.setItem('docList', JSON.stringify(this.documents));
    this.updateText();
  }

  renameDoc(newName: any){
    console.log(
      newName.target.innerText  
    )
    this.currDocument.name= newName.target.innerText
  }

  editName(){
    this.inEditMode = !this.inEditMode;
  }

  saveDocumentChange(){
    localStorage.setItem('docList',JSON.stringify(this.documents));
  }

  addDocument(newDocument: DocumentIterface) {
    newDocument.createdAt = this.documentService.generateDate();
    this.documents.push(newDocument);
    localStorage.setItem('docList', JSON.stringify(this.documents));
    this.currDocument = this.documents[this.documents.length - 1]
    this.updateText();
  }
}
