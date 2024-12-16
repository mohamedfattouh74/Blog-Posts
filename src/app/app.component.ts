import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-posts';
}
