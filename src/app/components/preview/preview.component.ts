
import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PreviewTogglerService } from '../../services/preview-toggler.service';
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

  toggleVisible() {
    this.toggleService.Visible = !this.toggleService.Visible; 
  }

  toggleService = inject(PreviewTogglerService)
  ngOnInit() {
    // this.dataService.updateText();
  }
}
