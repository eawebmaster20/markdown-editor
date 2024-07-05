import { Injectable } from '@angular/core';
import { marked } from 'marked';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  markdown = {
    text: 'this is some text to preview',
    renderedText: marked.parse(''),
  };
  updateText() {
    this.markdown.renderedText = marked.parse(this.markdown.text);
    // hljs.highlightBlock(txt);const code = ;
    // this.Markdown.renderedText= Prism.highlight(marked.parse(`var data = 1;`).toString(), Prism.languages['javascript'], 'javascript');

    // document.querySelectorAll('pre code').forEach((block) => hljs.highlightBlock(txt));
  }
  constructor() {}
}
