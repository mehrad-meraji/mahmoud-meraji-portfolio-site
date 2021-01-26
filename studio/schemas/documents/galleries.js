export default {
  name: 'galleries',
  title: 'Galleries',
  type: 'document',
  initialValue: () => ({
    isPasswordProtected: false
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'isPasswordProtected',
      type: 'boolean'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'artworkBlock',
        },
        {
          type: 'textBlock'
        },
        {
          type: 'heroBlock'
        }
      ]
    }
  ]
}
