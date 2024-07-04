import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { ModalService } from '../../services/modal.service';
import { CurrentDocumentService } from '../../services/current-document.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  sidebarService = inject(SidebarService);
  modalService = inject(ModalService);
  currDocService = inject(CurrentDocumentService);

  constructor() {}
}
