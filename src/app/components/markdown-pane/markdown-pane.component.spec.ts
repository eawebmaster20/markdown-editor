import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownPaneComponent } from './markdown-pane.component';

describe('MarkdownPaneComponent', () => {
  let component: MarkdownPaneComponent;
  let fixture: ComponentFixture<MarkdownPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownPaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkdownPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
