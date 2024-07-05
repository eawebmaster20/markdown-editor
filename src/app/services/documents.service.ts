import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { transformDocuments } from './time-transformed'
import { map } from 'rxjs/operators';
import { IDocument } from './document-type';
import { DocumentIterface } from '../components/interfaces/document';



@Injectable({
  providedIn: 'root',
})

export class DocumentsService {
  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get<DocumentIterface[]>('../../assets/data.json')
    // .pipe(map(transformDocuments))
    // return this.http.get<DocumentIterface[]>('../../assets/data.json');
  }
}


