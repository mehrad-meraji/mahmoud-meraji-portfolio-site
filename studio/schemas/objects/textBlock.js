import artworkBlock from "../objects/artworkBlock";
import {qF} from "sanity-quick-fields";

export default {
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Leave title blank to just display the paragraph.'
    },
    {
      title: 'Paragraph',
      name: 'paragraph',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'artworkBlock'}
      ]
    }],
  preview: {
    selection: {
      subtitle: 'title'
    },
    prepare(selection) {
      return {
        ...selection,
        title: 'Text Block',
      }
    }
  }
}
