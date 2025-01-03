// sanity/pet.ts
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'summary',
            type: 'text',
            title: 'Summary',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Profile Picture',
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of:[
                defineArrayMember({
                    type: 'block',
                }),
            ]
        }),
        defineField({
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [
                {
                    type: 'author',
                }
            ],
            validation: Rule => Rule.required()
        })
    ]
})