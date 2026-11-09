import { Component, EmbeddedViewRef, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html'
})
export class PanelComponent {
  @Input() contentView?: TemplateRef<any>;
}