import { Component } from "@angular/core";
import { RevealOnScrollDirective } from "../../directives/reveal-on-scroll.directive";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {}
