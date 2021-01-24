import {qF} from "sanity-quick-fields";

export default {
  name: 'picture',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      description: 'Important for accessibility and SEO',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
    qF('attribution')
  ]
}
