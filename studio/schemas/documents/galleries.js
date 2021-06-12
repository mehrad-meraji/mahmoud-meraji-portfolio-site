export default {
  name: 'galleries',
  title: 'Galleries',
  type: 'document',
  initialValue: {
    isPasswordProtected: false,
    isActive: true
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.title}-${doc.date}`.toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'isPasswordProtected',
      type: 'boolean'
    },
    {
      name: 'isActive',
      type: 'boolean'
    },
    {
      name: 'date',
      type: 'string'
    },
    {
      name: 'previewArtwork',
      title: 'Preview Artwork',
      description: 'Used to show a thumbnail in grid with other collections.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'artwork'}
          ]
        }
      ],
      validation: Rule => Rule.max(1).unique()
    },
    {
      name: 'content',
      title: 'Gallery',
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
        },
        {
          type: 'selectedWorksBlock'
        }
      ]
    }
  ],
  preview: {
    select: {
      media: 'previewArtwork.0.picture',
      title: 'title'
    },
    prepare(selection) {
      return {
        ...selection,
      }
    }
  }
}
