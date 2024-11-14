import {CommentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'testimonial',
      type: 'text',
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),
  ],
})
