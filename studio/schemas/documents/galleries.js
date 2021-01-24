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
      name: 'pageBuilder',
      title: 'Page Builder',
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
