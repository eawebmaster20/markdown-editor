import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-markdown-pane',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './markdown-pane.component.html',
  styleUrl: './markdown-pane.component.scss',
})
export class MarkdownPaneComponent {
  http = inject(HttpClient);
  dataService = inject(DataService);

  ngOnInit() {
    this.http.get<any>("../../assets/data.json").subscribe(data => {
      this.dataService.Markdown.text = data[1].content;
      this.dataService.updateText();
      console.log(this.dataService.Markdown.text)
    })
  }
}