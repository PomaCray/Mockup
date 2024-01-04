export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product'
        },
        {
            name: 'images',
            type: 'array',
            title: 'product Images',
            of: [{type: 'image'}],
        },
        {
            name: 'description',
            type: 'text',
            titles: 'Description of product',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product slug',
            options: {
                source: 'name',
            }
        },
        {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
           name: 'category',
           title: 'Product Category',
           type: 'reference',
           to: [
            {
                type: 'category',
            }
           ]
        }
        
    ],
}    