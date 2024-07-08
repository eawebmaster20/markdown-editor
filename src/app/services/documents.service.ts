import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { transformDocuments } from './time-transformed'
import { map } from 'rxjs/operators';
import { DocumentIterface } from '../components/interfaces/document';
import { CurrentDocumentService } from './current-document.service';



@Injectable({
  providedIn: 'root',
})

export class DocumentsService {
  documents: DocumentIterface[] = []
  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get<DocumentIterface[]>('assets/data.json')
    .pipe(map(transformDocuments))
  }


  generateDate(): string {
    const date = new Date(Date.now()); 
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit', 
      month: 'long', 
      year: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  }
}


