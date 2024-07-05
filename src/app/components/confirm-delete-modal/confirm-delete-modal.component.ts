import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CurrentDocumentService } from '../../services/current-document.service';

@Component({
  selector: 'app-confirm-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirm-delete-modal.component.html',
  styleUrl: './confirm-delete-modal.component.scss',
})
export class ConfirmDeleteModalComponent {
  modalService = inject(ModalService);
  currDocService = inject(CurrentDocumentService);
  display = 'none';

  hideModal() {
    this.display === 'block' ? 'none' : 'block';
  }
  
 deleteCloseModal() {
  this.currDocService.deleteCurrDocument()
  this.modalService.hideModal();
 }
  
}
