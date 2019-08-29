import { Component, Inject, OnInit } from '@angular/core';
import { RedditApiService, Post } from '../reddit-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from 'q';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent implements OnInit {

  redditPosts: Post[];
  afterPath = '';
  constructor(
    private RedditAPiService: RedditApiService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {

    this.route.params.subscribe(async (path) => {
      console.log('path change', path);
      this.redditPosts = await this.RedditAPiService.getLastKnownPosition(path.afterPath)
    });



    // console.log('list-view', this.router);

    this.afterPath = this.RedditAPiService.after;
  }

  getPrev() {
    // this.redditPosts = await this.RedditAPiService.getPreviousPage();
    const prev = this.RedditAPiService.oldAfter;
    // console.log('oldnext (aka prev)', prev);
    return prev ? prev : '';
  }

  getNext() {
    const next = this.RedditAPiService.after;
    // console.log('next', next)
    return next ? next : '';
  }

  getPageCount() {
    return this.RedditAPiService.getCount();
  }
}
