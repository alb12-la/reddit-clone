import { Inject, Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';


import { RedditApiService, Post } from './reddit-api.service';

@Injectable()
export class AfterPathResolver implements Resolve<{ after: string }> {

    constructor(
        private redditApiService: RedditApiService,
        private router: Router
    ) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<{ after: string }> {


        let resp;
        resp = this.redditApiService.after;
        console.log('Current after', resp);
        return { after: resp };
    }
}
