import { Component, Inject, OnInit } from '@angular/core';
import { RedditApiService, Post } from '../reddit-api.service';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent implements OnInit {

  redditPosts: Post[];
  selectedPost: string;

  constructor(
    private RedditAPiService: RedditApiService,
  ) { }

  async ngOnInit() {
    this.redditPosts = await this.RedditAPiService.getListings();
  }

  selectPost(post: string) {
    this.selectedPost = post;
  }

  async getPrev() {
    const posts = await this.RedditAPiService.getPreviousPage();
    window.scrollTo(0, 0);
    this.redditPosts = posts;
  }

  clearSelectedPost() {
    this.selectedPost = null;
  }

  async getNext() {
    const posts = await this.RedditAPiService.getNextPage();
    window.scrollTo(0, 0);
    this.redditPosts = posts;
  }

  getPageCount() {
    return this.RedditAPiService.getCount();
  }
}
