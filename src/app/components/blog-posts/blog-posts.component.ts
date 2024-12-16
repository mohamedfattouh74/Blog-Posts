import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlogPostsListComponent } from '../posts-list/posts-list.component';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';

@Component({
  selector: 'blog-posts',
  standalone: true,
  imports: [
    CommonModule,
    BlogPostsListComponent,
    BlogHeaderComponent
  ],
  templateUrl: `./blog-posts.component.html`,
  styleUrl: './blog-posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostsComponent { }
