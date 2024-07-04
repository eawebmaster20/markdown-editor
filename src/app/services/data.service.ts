import { Injectable } from '@angular/core';
import { marked } from 'marked';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  Markdown={
    text:'',
    renderedText:marked.parse(""),
  }
  updateText(){
    this.Markdown.renderedText = marked.parse(this.Markdown.text)
    // hljs.highlightBlock(txt);const code = ;
    // this.Markdown.renderedText= Prism.highlight(marked.parse(`var data = 1;`).toString(), Prism.languages['javascript'], 'javascript');
    
    // document.querySelectorAll('pre code').forEach((block) => hljs.highlightBlock(txt));
  }
  constructor() { }
}
