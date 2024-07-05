import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewComponent } from './components/preview/preview.component';
import { MarkdownPaneComponent } from './components/markdown-pane/markdown-pane.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';
import { PreviewTogglerService } from './services/preview-toggler.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    ConfirmDeleteModalComponent,
    SidebarComponent,
    MarkdownPaneComponent,
    PreviewComponent,
    CreateModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  toggleService = inject(PreviewTogglerService)
}
