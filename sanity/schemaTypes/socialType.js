import {StarFilledIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const socialType = defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  icon: StarFilledIcon,
  fields: [
    defineField({
      name: 'platform',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'string',
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      title: 'Is Active',
    }),
    defineField({
        name: 'socialIcon',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          }
        ]
      }),
  ],
})
