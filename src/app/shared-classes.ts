
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
