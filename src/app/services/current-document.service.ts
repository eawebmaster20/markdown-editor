import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Document {
  createdAt: string;
  name: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class CurrentDocumentService {
  documents: Document[] = [];
  currDocument = this.documents[0];
  inEditMode:boolean = false
  constructor(private http: HttpClient) {
    this.http.get<any>('../../assets/data.json').subscribe((data) => {
      this.documents = data;
      this.currDocument = data[1];
    });
  }
  getCurrDocument(){
    return this.currDocument;
  }

  setCurrDocument(document: Document) {
    this.currDocument = document;
  }
  deleteCurrDocument() {
    this.documents = this.documents.filter((doc) => doc.name!== this.currDocument.name);
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
}
