import { Injectable } from '@angular/core';
import { marked } from 'marked';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  Markdown = {
    text: 'this is some text to preview',
    renderedText: marked.parse(''),
  };
  updateText() {
    this.Markdown.renderedText = marked.parse(this.Markdown.text);
  }
  constructor() {}
}
