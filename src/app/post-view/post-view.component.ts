import { Component, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RedditApiService, Post } from '../reddit-api.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnChanges {
  @Input() selectedPost: string;
  post: Post;
  constructor(
    private RedditAPiService: RedditApiService,
    private route: ActivatedRoute,
  ) { }

  async ngOnChanges() {
    this.post = await this.RedditAPiService.getPost(this.selectedPost);
  }

}
