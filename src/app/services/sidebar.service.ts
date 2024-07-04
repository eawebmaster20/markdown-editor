import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isOpened = false;

  toggleSidebar() {
    this.isOpened ? (this.isOpened = false) : (this.isOpened = true);
  }

  getSidebarStatus() {
    return this.isOpened;
  }
}
