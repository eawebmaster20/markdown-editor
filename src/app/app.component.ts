import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorPreviewComponent } from './components/editor-preview/editor-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EditorPreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
