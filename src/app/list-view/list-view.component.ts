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
    // Set value to falsy so that loading screen appears
    this.redditPosts = null;
    window.scrollTo(0, 0);
    this.redditPosts = await this.RedditAPiService.getPreviousPage();
  }

  clearSelectedPost() {
    this.selectedPost = null;
  }

  async getNext() {
    // Set value to falsy so that loading screen appears
    this.redditPosts = null;
    window.scrollTo(0, 0);
    this.redditPosts = await this.RedditAPiService.getNextPage();

  }

  getPageCount() {
    return this.RedditAPiService.getCount();
  }
}
