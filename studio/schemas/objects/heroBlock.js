import {qF} from "sanity-quick-fields";

export default {
  title: 'Hero Block',
  name: 'heroBlock',
  type: 'object',
  fields: [
    {
      name: 'hero',
      type: 'picture',
    },
    {
      name: 'paragraph',
      type: 'textBlock'
    }
  ],
  preview: {
    select: {
      subtitle: 'hero.asset._ref',
      media: 'hero'
    },
    prepare(selection) {
      return {
        ...selection,
        title: 'Hero Block',
      }
    }
  }
}
