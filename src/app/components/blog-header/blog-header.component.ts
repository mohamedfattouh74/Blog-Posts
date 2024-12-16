import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blog-header',
  standalone: true,
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogHeaderComponent { }
