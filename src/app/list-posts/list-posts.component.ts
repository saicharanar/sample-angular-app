import { Subscription } from 'rxjs';
import { SharedServiceService } from './../shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit{
  posts: string[] = [];
  postSubscribtion: Subscription;

  constructor(private sharedService : SharedServiceService) {}

  ngOnInit(): void {
    this.postSubscribtion = this.sharedService.getPost()
      .subscribe((post : string) => this.addPost(post));
  }

  addPost(post: string) {
    this.posts.push(post);
  }
}
