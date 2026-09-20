import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { invoke } from "@tauri-apps/api/core";
import { TestShowcaseComponent } from "./components/test-showcase.component/test-showcase.component";
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-root",
  imports: [RouterOutlet, TestShowcaseComponent],
  providers: [MessageService],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  
}
