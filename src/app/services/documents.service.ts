import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentIterface } from '../components/interfaces/document';


@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get<DocumentIterface[]>('../../assets/data.json');
  }
}
