export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            title: 'Name of Product',
            type:'string',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{type: 'image'}],
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description of Product',
            type:'text',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
        },
        {
            name: 'category',
            title: 'Product category',
            type: 'reference',
            to: [{
                type: 'category'
            }]
        },
        {
            name: 'price_id',
            title: ' Stripe Price ID',
            type:'string',
        }
    ]
}