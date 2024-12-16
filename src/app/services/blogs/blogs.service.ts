import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../../models/blogs';

@Injectable({
  providedIn: 'root'
})

export class BlogPostsService {

  baseUrl='https://dev.to/api';

  constructor(private http:HttpClient) {}

  getBlogs(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.baseUrl}/articles`);
  }
    
}
