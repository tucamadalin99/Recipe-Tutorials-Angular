export class Recipe {
    key: number;
    name: string;
    description: string;
    imageUrl: string;
    featured: boolean;
    liked: boolean;
    saved: boolean;
    tags: Array<string>;

    constructor(obj: Recipe) {
        this.key = obj.key;
        this.name = obj.name;
        this.description = obj.description;
        this.imageUrl = obj.imageUrl;
        this.featured = obj.featured;
        this.liked = obj.liked;
        this.saved = obj.saved;
        this.tags = obj.tags;
    }
}