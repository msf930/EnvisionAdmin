// https://www.sanity.io/docs/structure-builder-cheat-sheet
import {InfoOutlineIcon} from '@sanity/icons'
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('socials').title('Socials'),
      S.listItem()
        .title('Info')
        .icon(InfoOutlineIcon)
        .child(
          S.document()
            .title('Info')
            .schemaType('info')
            .documentId('info')  
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'testimonial', 'socials', 'info'].includes(item.getId()),
      ),
    ])
