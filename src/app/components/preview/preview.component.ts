import { Component } from '@angular/core';
import { CurrentDocumentService } from '../../services/current-document.service';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
})
export class PreviewComponent {
  constructor(public currDocService: CurrentDocumentService) {}

  ngOnInit() {
    // this.dataService.updateText();
  }
}
