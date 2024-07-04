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
export class DocumentsService {
  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get<any>('../../assets/data.json');
  }
}
