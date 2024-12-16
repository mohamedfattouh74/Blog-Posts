import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { truncateString } from '../../utils/string-utils';

@Component({
  selector: 'blog-card',
  standalone: true,
  imports: [CommonModule,DatePipe],
  templateUrl: `./blog-card.component.html`,
  styleUrl: './blog-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCardComponent { 

  @Input() blogPost = new Input();

  truncateTitle(title: string, wordLimit: number): string {
    return truncateString(title, wordLimit);
  }


}
