import { Component } from '@angular/core';
import { VacancyPreviewComponent } from '../../components/vacancy-preview.component/vacancy-preview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workspace.page',
  imports: [CommonModule, VacancyPreviewComponent],
  templateUrl: './workspace.page.html',
  styleUrl: './workspace.page.css',
  standalone: true
})
export class WorkspacePage {}
