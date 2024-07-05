import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { DocumentsService } from '../../services/documents.service';
import { PreviewTogglerService } from '../../services/preview-toggler.service';

@Component({
  selector: 'app-markdown-pane',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './markdown-pane.component.html',
  styleUrl: './markdown-pane.component.scss',
})
export class MarkdownPaneComponent {
  // textBoxData = ``;
  // http = inject(HttpClient);
  documentService = inject(DocumentsService);
  dataService = inject(DataService);
  toggleService = inject(PreviewTogglerService)

  ngOnInit() {
    console.log("somethig")
    this.documentService.getDocuments().subscribe((data) => {
      this.dataService.markdown.text = data[1].content;
      this.dataService.updateText();
      console.log(data[1].content)
    })
  }
}
