import artwork from "../documents/artwork";
import layout from "./layout";
import {qF} from "sanity-quick-fields";

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
    qF('sold', 'boolean'),
    qF('artworkSize', 'artworkSize'),
    {
      name: 'cta',
      title: 'Button',
      type: 'object',
      fields: [
        qF('label'),
        qF('url')
      ]
    },
    qF('layout', 'layout'),
    qF('extraPadding', 'boolean'),
    qF('fullBleed', 'boolean'),
    qF('backgroundColor', 'color'),
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
