import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'AuthorName',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'bio',
            type: 'text',
            title: 'Bio',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Profile Picture',
            options:{
                hotspot: true
            },
            validation: Rule => Rule.required()
        }),
    ]
})