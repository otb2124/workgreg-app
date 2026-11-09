import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelDirective } from '../../directives/panel.directive/panel.directive';

@Component({
  selector: 'app-vacancy-preview',
  imports: [CommonModule, PanelDirective],
  templateUrl: './vacancy-preview.component.html',
  styleUrl: './vacancy-preview.component.css',
  standalone: true
})
export class VacancyPreviewComponent {}
