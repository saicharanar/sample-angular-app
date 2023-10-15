import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public posts = new Subject();

  constructor() { }

  setPost(post: string) {
    this.posts.next(post);
  }

  getPost() {
    return this.posts;
  }
}
