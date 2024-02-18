export interface simplifiedProduct {
    _id: string;
    name: string;
    categoryName: string;
    price: number;
    imageUrl: string;
    slug: string
}

export interface fullProduct {
    _id: string;
    name: string;
    categoryName: string;
    price: number;
    images: any;
    slug: string;
    Description: string;
    price_id: string
}

