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
  currDocument = {
    createdAt: '',
    name: '',
    content: '',
  };
  constructor(private http: HttpClient) {
    this.http.get<any>('../../assets/data.json').subscribe((data) => {
      this.documents = data;
      this.currDocument = data[1];
    });
  }

  setCurrDocument(document: Document) {
    this.currDocument = document;
  }
}
