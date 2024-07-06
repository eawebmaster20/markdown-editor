import { Injectable } from '@angular/core';
import { marked } from 'marked';
import { DocumentIterface } from '../components/interfaces/document';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrentDocumentService {

  documents: DocumentIterface[] = [];
  inEditMode:boolean = false
  constructor(private http: HttpClient) {
    this.http.get<any>('../../assets/data.json').subscribe((data) => {
      this.documents = data;
      this.currDocument = data[1];
    })}
    ;

  currDocument:DocumentIterface = {name:'',content:"",renderedText:marked.parse(''),createdAt:""};

  updateText() {
    this.currDocument.renderedText = marked.parse(this.currDocument.content);
  }
  setCurrDocument(document: DocumentIterface) {
    localStorage.setItem('currDoc', document.toString());
    this.currDocument = document;
    this.updateText()
  }
  deleteCurrDocument() {
    this.documents = this.documents.filter(
      (doc) => doc.name !== this.currDocument.name
    );
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
   localStorage.setItem('currDoc',this.currDocument.toString());
 }



}
