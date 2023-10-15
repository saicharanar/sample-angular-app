import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CreatePostComponent,
    ListPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
