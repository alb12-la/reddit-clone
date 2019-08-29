import { Component, Inject, OnInit } from '@angular/core';
import { RedditApiService, Post } from '../reddit-api.service';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent implements OnInit {

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
