import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateModalService {
  isDisplay = false;

  constructor() {}

  displayModal() {
    this.isDisplay = true;
  }

  hideModal() {
    this.isDisplay = false;
  }
}
