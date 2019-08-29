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
  before = '';
  constructor(
    private http: HttpClient,
  ) { }


  async getNextPage() {

  }

  async getListings(): Promise<Post[]> {
    // URL
    const builtURL = `https://www.reddit.com/r/all/hot.json`;
    // HTTP Parameters
    const httpParams = new HttpParams()
      .set(LIMIT_KEY, LIMIT)
      .set('raw_json', '1');
    const response: any = await this.get(builtURL, httpParams);
    return this.parseResults(response);
  }

  parseResults(redditResponse: any): Post[] {
    const posts: any[] = redditResponse.data.children;
    const allPosts: Post[] = [];
    // Parse Posts

    posts.forEach((post) => {
      const data = post.data;
      const previewImages = data.preview.images;
      console.log(previewImages[0].source.url);

      const newPost = new Post(
        data.id,
        data.permalink,
        data.subreddit,
        data.author,
        previewImages[0].source.url,
        data.title,
        data['secure_media']
      );
      allPosts.push(newPost);
    });
    return allPosts;
  }


  // TODO: Use proper try catch techniques.
  get(getUrl: string, httpParameters?: HttpParams): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(getUrl, { params: httpParameters }).subscribe((response: any) => {
        console.log(response);
        resolve(response);
      }, reject);
    });
  }


}

