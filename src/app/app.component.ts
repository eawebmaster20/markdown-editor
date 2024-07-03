import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownPaneComponent } from './markdown-pane/markdown-pane.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarkdownPaneComponent] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  buttonName = 'Save Changes';
}
