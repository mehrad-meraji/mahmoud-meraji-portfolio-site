import artwork from "../documents/artwork";
import layout from "./layout";

export default {
  name: 'artworkBlock',
  title: 'Artwork Block',
  type: 'object',
  fields: [
    {
      name: 'artwork',
      type: 'reference',
      to: [
        { type: 'artwork' }
      ]
    },
    {
      name: 'layout',
      type: 'layout'
    },
  ],
  preview: {
    select: {
      subtitle: 'artwork.title',
      media: 'artwork.picture'
    },
    prepare(selection) {
      return {
        ...selection,
        title: 'Artwork Block',
      }
    }
  }
}
