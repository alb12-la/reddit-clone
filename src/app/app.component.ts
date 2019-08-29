import { Component, Inject, OnInit } from '@angular/core';
import { RedditApiService, Post } from './reddit-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reddit-clone';
  redditPosts: Post[];
  constructor(
    private RedditAPiService: RedditApiService,
  ) { }

  async ngOnInit() {
    this.redditPosts = await this.RedditAPiService.getListings();
    console.log('r.', this.redditPosts)
  }

  async getPrev() {
    this.redditPosts = await this.RedditAPiService.getPreviousPage();
  }

  async getNext() {
    this.redditPosts = await this.RedditAPiService.getNextPage();
  }

  getPageCount() {
    return this.RedditAPiService.getCount();
  }
}
