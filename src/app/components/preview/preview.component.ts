
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

  toggleService = inject(PreviewTogglerService)
  currDocService = inject(CurrentDocumentService)
  constructor() {}

  toggleVisible() {
    this.toggleService.Visible = !this.toggleService.Visible; 
  }
}
