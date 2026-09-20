import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-test-showcase-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    TableModule,
    TagModule,
    ToastModule
  ],
  templateUrl: './test-showcase.component.html'
})
export class TestShowcaseComponent {
  inputValue: string = 'Tauri Angular App';

  users = [
    { id: 101, name: 'Alex Rivers', role: 'Frontend Lead', status: 'Active' },
    { id: 102, name: 'Jordan Vance', role: 'Rust Engineer', status: 'Active' },
    { id: 103, name: 'Taylor Morgan', role: 'UI/UX Designer', status: 'Pending' }
  ];

  constructor(private messageService: MessageService) {}

  showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Integration Success',
      detail: 'Tailwind CSS v4 & PrimeNG are rendering correctly!'
    });
  }
}