export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of Product"
        },
        {
            name: "images",
            type: "array",
            title: "Product Images",
            of: [{type: 'image'}]
        },
        {
            name: "Description",
            type: "text",
            title: "Product Description"
        },
        {
            name: "slug",
            type: "slug",
            title: "Product Slug",
            options: {
                source: "name",
            }
        },
        {
            name: "price",
            type: "number",
            title: "Product Price"
        },
        {
            name: "price_id",
            title: "Stripe Price ID",
            type: "string"
        },
        {
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [
                {
                    type: "category"
                },
            ]
        }
    ]
}