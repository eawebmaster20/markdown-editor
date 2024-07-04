import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpened = false;

  constructor() {}

  showModal() {
    this.isOpened = true;
  }

  hideModal() {
    this.isOpened = false;
  }
}
