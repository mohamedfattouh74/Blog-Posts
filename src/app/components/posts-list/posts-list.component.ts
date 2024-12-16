import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPostsService } from '../../services/blogs/blogs.service';
import { BlogPost } from '../../models/blogs';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'blog-posts-list',
  standalone: true,
  imports: [
    CommonModule,
    BlogCardComponent,
    NgxPaginationModule,
    LoaderComponent,
  ],
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostsListComponent implements OnInit, OnDestroy {

  blogPosts: BlogPost[] = [];
  page: number = 1;
  count: number = 0;
  perPageSize: number = 9;
  isLoading: boolean = true;
  subscriptions :Subscription[]= [];

  constructor(private blogsService: BlogPostsService, private toastrService: ToastrService) {}

  ngOnInit() {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.isLoading = true;
    let blogSubscription = this.blogsService.getBlogs().subscribe({
      next: (res) => this.blogPosts = res,
      error: () => this.toastrService.error('Failed to retrieve blog posts', 'Error'),
      complete: () => this.isLoading = false,
    });
    this.subscriptions.push(blogSubscription);
  }

  onPageChange(event: any) {
    this.page = event;
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription=>{
      subscription.unsubscribe();
    })
  }

}
