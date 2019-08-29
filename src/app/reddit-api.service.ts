import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';

export class Page {
  constructor(
    public posts: Post[],
    public before: string,
    public after: string,
  ) { }
}

export class Comment {
  constructor(
    public author: string,
    public body: string,
    public replies?: Comment[],
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
    public comments?: Comment[]
  ) { }
}

const LIMIT_KEY = 'limit';
const LIMIT = '10';
const RAW_JSON_KEY = 'raw_json';
const RAW_JSON_VALUE = '1';

@Injectable()
export class RedditApiService {
  private after = '';
  private before = '';
  private count = 0;

  constructor(
    private http: HttpClient,
  ) { }

  getCount() {
    return this.count;
  }

  /**
   * Returns a Reddit Post(t3) object for a given postId
   * @param postId https://www.reddit.com/dev/api/#fullnames
   */
  async getPost(postId: string): Promise<Post> {
    const builtURL = `https://www.reddit.com/comments/${postId}/.json`;
    // Set HTTP Parameters
    let httpParams = new HttpParams();
    httpParams = httpParams.set(LIMIT_KEY, LIMIT);
    httpParams = httpParams.set(RAW_JSON_KEY, RAW_JSON_VALUE);
    // Get response 
    const response = await this.get(builtURL, httpParams);
    // Parse response to get a Post object
    const parsed = this.parseResults(response[0])[0];
    // Parse comments separately
    parsed.comments = this.parseComments(response[1]);
    return parsed;
  }

  /**
   * Returns an array of Posts, that starts after the AFTER reference
   */
  async getNextPage(): Promise<Post[]> {
    const response = this.getListings('after', this.after);
    return response;
  }

  /**
   * Returns an array of Posts, that starts at ( BEFORE reference - COUNT)
   */
  async getPreviousPage(): Promise<Post[]> {
    const response = this.getListings('before', this.before);
    return response;
  }

  /**
   * Returns an array of Posts
   * @param direction Either Before || After, depending on which direction we intend to paginate
   * @param reference the "anchor point" of the data slice https://www.reddit.com/dev/api/#listings
   */
  async getListings(direction?: string, reference?: string): Promise<Post[]> {
    // URL
    const builtURL = `https://www.reddit.com/r/all/hot.json`;
    // HTTP Parameters
    let httpParams = new HttpParams();
    httpParams = httpParams.set(LIMIT_KEY, LIMIT);
    httpParams = httpParams.set(RAW_JSON_KEY, RAW_JSON_VALUE);

    // Add direction if provided
    if (direction) {
      httpParams = httpParams.set(direction, reference);
      // update count
      if (direction === 'after') {
        this.count = this.count + 10;
      } else if (direction === 'before') {
        this.count = this.count - 10;
      }
    }
    httpParams = httpParams.set('count', String(this.count));

    const response: any = await this.get(builtURL, httpParams);
    // Update anchor points
    this.after = response.data.after;
    this.before = response.data.before;
    // Parse results into Posts
    return this.parseResults(response);
  }

  /**
   * Converts Raw JSON into Post Objects
   * @param redditResponse : Raw json provided by Reddit
   */
  parseResults(redditResponse: any): Post[] {
    const posts: any[] = redditResponse.data.children;
    const allPosts: Post[] = [];

    // Parse Posts
    posts.forEach((post) => {
      const data = post.data;
      // Lets not get fired from a job I don't have yet
      if (data.over_18) {
        return;
      }
      // Create a Post Object
      const newPost = new Post(
        data.id,
        data.permalink,
        data.subreddit,
        data.author,
        this.extractPreviewImages(data),
        data.title
      );
      // Push to list of posts
      allPosts.push(newPost);
    });
    console.groupEnd();
    return allPosts;
  }

  /**
   * Converts Raw JSON into Comment Objects
   * @param redditResponse :  Raw json provided by Reddit
   */
  parseComments(redditResponse: any): Comment[] {
    const posts: any[] = redditResponse.data.children;
    const allComments: Comment[] = [];

    // Parse Posts
    posts.forEach((post) => {
      const data = post.data;
      // TODO: We should recurse and collect replies to this comment.
      const newComment = new Comment(data.id, data.body_html);
      allComments.push(newComment);
    });

    return allComments;
  }

  // Hacky way of safely traversing through unknown object. 
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


  /**
   * Converts a `GET` request into a Promise that the caller can then await for
   */
  async get(getUrl: string, httpParameters?: HttpParams): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      this.http.get(getUrl, { params: httpParameters }).subscribe((response: object) => {
        resolve(response);
      }, reject);
    }).catch((error) => {
      throw new Error(`ERROR: Unable to retrieve data from ${getUrl} due to ${error}`);
    });
  }
}

