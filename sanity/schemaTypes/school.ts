import { defineField, defineType } from "sanity";

export const school = defineType({
    name: 'school',
    title: 'School',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'views',
            type: 'number',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'gender',
            type: 'string',
        }),
        defineField({
            name: 'region',
            type: 'string',
        }),
        defineField({
            name: 'district',
            type: 'string',
        }),
        defineField({
            name: 'town',
            type: 'string',
        }),
        defineField({
            name: 'residency',
            type: 'string',
        }),
        defineField({
            name: 'email',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'info',
            type: 'markdown',
        }),
    ],
    
})