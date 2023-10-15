import { SharedServiceService } from './../shared-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  message: string;

  constructor(private sharedService: SharedServiceService) {

  }

  submit() {
    this.sharedService.setPost(this.message);
  }
}
