import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
