import social from "../documents/social";
import galleries from "../documents/galleries";
import galleryBlock from './galleryBlock';

export default {
  title: 'Navigation',
  name: 'siteNavigation',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'page',
      title: 'Page',
      type: 'array',
      of: [
        {
          type: 'galleryBlock',
        }
      ]
    }
  ]
}
