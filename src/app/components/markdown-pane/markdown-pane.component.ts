
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-markdown-pane',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './markdown-pane.component.html',
  styleUrl: './markdown-pane.component.scss'
})
export class MarkdownPaneComponent {
  textBoxData = ``;
  http = inject(HttpClient);

  ngOnInit() {
    this.http.get<any>("../../assets/data.json").subscribe(data => {
      this.textBoxData = data[1].content;
      console.log(this.textBoxData)
    })
  }
}
