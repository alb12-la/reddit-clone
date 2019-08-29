import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RedditApiService, Post } from '../reddit-api.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnInit {
  posts: Post[];
  constructor(
    private RedditAPiService: RedditApiService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    const postID = this.route.snapshot.params['post'];
    this.posts = await this.RedditAPiService.getPost(postID);
  }

}
