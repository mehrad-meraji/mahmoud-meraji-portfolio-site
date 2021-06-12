export default {
  name: 'selectedWorksBlock',
  title: 'Selected Works',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Works',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: [
            { type: 'artwork' }
          ]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {title: "Selected Works"}
    }
  }
}
