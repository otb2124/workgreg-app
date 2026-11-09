import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit,
} from "@angular/core";
import { PanelComponent } from "../../components/panel.component/panel.component";

@Directive({
  selector: "[appPanel]",
  standalone: true,
})
export class PanelDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.viewContainer.clear();

    const panelRef = this.viewContainer.createComponent(PanelComponent);
    panelRef.instance.contentView = this.templateRef;
  }
}
