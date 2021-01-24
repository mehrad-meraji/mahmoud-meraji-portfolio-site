import { qF } from "sanity-quick-fields";

export default {
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    qF('title', 'string', {
      validation: Rule => Rule.required()
    }),
    qF('picture', 'picture'),
    qF('year' ),
    qF('medium' ),
    qF('dimensions' ),
    qF('edition' ),
    qF('location' ),
    qF('totalPrice', 'number' ),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'picture'
    }
  }
}
