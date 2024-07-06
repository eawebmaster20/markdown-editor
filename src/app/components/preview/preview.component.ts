
import { Component, inject } from '@angular/core';
import { PreviewTogglerService } from '../../services/preview-toggler.service';
import { CurrentDocumentService } from '../../services/current-document.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
})
export class PreviewComponent {
  constructor(public currDocService: CurrentDocumentService) {}

  toggleVisible() {
    this.toggleService.Visible = !this.toggleService.Visible; 
  }

  toggleService = inject(PreviewTogglerService)
  ngOnInit() {
    console.log(this.currDocService.currDocument.renderedText);
    
    // this.dataService.updateText();
  }
}
