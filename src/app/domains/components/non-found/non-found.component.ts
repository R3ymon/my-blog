import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-non-found',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './non-found.component.html',
  styleUrl: './non-found.component.css',
})
export class NonFoundComponent {}
