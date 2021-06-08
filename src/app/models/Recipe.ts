
export class Recipe {
    key: any;
    name: string;
    description: string;
    imageUrl: string;
    featured: boolean;
    liked: boolean;
    saved: boolean;
    tags: Array<string>;
    type: string;
    price: number;

    constructor(obj: Recipe) {
        this.key = obj ? obj.key : undefined;
        this.name = obj ? obj.name : "";
        this.description = obj ? obj.description : "";
        this.imageUrl = obj ? obj.imageUrl : "";
        this.featured = obj ? obj.featured : false;
        this.liked = obj ? obj.liked : false;
        this.saved = obj ? obj.saved : false;
        this.tags = obj ? obj.tags : [];
        this.type = obj ? obj.type : "";
        this.price = obj ? obj.price : undefined;
    }
}