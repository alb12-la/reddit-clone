import { Component, OnChanges, Input } from '@angular/core';

import { RedditApiService } from '../reddit-api.service';
import { Post } from '../shared-classes';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnChanges {
  @Input() selectedPost: string;
  post: Post;

  constructor(
    private RedditAPiService: RedditApiService,
  ) { }

  async ngOnChanges() {
    this.post = await this.RedditAPiService.getPost(this.selectedPost);
  }

}
