import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';

export class Page {
  constructor(
    public posts: Post[],
    public before: string,
    public after: string,
  ) { }

}

export class Post {
  constructor(
    public id: string,
    public permalink: string,
    public subReddit: string,
    public authorName: string,
    public previewImage: string,
    public title: string,
    public media: any
  ) { }
}

const LIMIT_KEY = 'limit';
const LIMIT = '10';

@Injectable()
export class RedditApiService {
  after = '';
  oldAfter = '';
  private before = '';
  private count = 0;

  constructor(
    private http: HttpClient,
  ) { }

  getCount() {
    return this.count;
  }

  async getPost(postId: string) {
    const builtURL = `https://www.reddit.com/comments/${postId}/.json`;
    // HTTP Parameters
    let httpParams = new HttpParams();
    httpParams = httpParams.set(LIMIT_KEY, LIMIT);
    httpParams = httpParams.set('raw_json', '1');

    const response = await this.get(builtURL, httpParams);
    const parsed = this.parseResults(response[0]);
    return (parsed);
  }

  async getNextPage(): Promise<Post[]> {
    const response = this.getListings('after', this.after);
    return response;
  }

  async getPreviousPage(): Promise<Post[]> {
    const response = this.getListings('before', this.before);
    return response;
  }

  async getLastKnownPosition(afterReference: string): Promise<Post[]> {
    return this.getListings('after', afterReference)
  }

  async getListings(direction?: string, reference?: string): Promise<Post[]> {

    // URL
    const builtURL = `https://www.reddit.com/r/all/hot.json`;
    // HTTP Parameters
    let httpParams = new HttpParams();
    httpParams = httpParams.set(LIMIT_KEY, LIMIT);
    httpParams = httpParams.set('raw_json', '1');

    // Add direction if provided
    if (direction) {
      console.log('load', direction, reference);
      httpParams = httpParams.set(direction, reference);

      // update count
      if (direction === 'after') {
        this.count = this.count + 10;
      } else if (direction === 'before') {
        this.count = this.count - 10;
      }
    }
    console.log('********CALLING GET LISTING', this.count, this.after)
    httpParams = httpParams.set('count', String(this.count));
    console.log('params', httpParams.toString());
    const response: any = await this.get(builtURL, httpParams);
    if (this.after) {
      this.oldAfter = this.after;
    }
    this.after = response.data.after;
    this.before = response.data.before;
    console.log('oldAfter', this.oldAfter);
    console.log('after', this.after);
    console.log('before', this.before);
    console.log('==================================')
    return this.parseResults(response);
  }

  parseResults(redditResponse: any): Post[] {
    const posts: any[] = redditResponse.data.children;
    const allPosts: Post[] = [];
    // Parse Posts

    posts.forEach((post) => {
      const data = post.data;
      console.log(data.id)
      const newPost = new Post(
        data.id,
        data.permalink,
        data.subreddit,
        data.author,
        this.extractPreviewImages(data),
        data.title,
        data['secure_media']
      );
      allPosts.push(newPost);
    });

    return allPosts;
  }

  parsePostObject(redditResponse: any) {
    console.log(redditResponse);
  }

  extractPreviewImages(data) {
    if (data &&
      data.preview &&
      data.preview.images &&
      data.preview.images[0] &&
      data.preview.images[0].source &&
      data.preview.images[0].source.url) {
      return data.preview.images[0].source.url;
    } else {
      return '';
    }

  }


  // TODO: Use proper try catch techniques.
  get(getUrl: string, httpParameters?: HttpParams): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(getUrl, { params: httpParameters }).subscribe((response: any) => {
        resolve(response);
      }, reject);
    });
  }


}

