import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isOpened = false;

  toggleSidebar() {
    this.isOpened = !this.isOpened;
  }

  getSidebarStatus() {
    return this.isOpened;
  }
}
