import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  isOpened = false;

  toggleSidebar() {
    this.isOpened ? (this.isOpened = false) : (this.isOpened = true);
  }
}
