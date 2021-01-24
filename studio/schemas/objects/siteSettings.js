import social from "../documents/social";
import galleries from "../documents/galleries";

export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'object',
  fields: [
    {
      title: 'Site Name',
      name: 'siteName',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'landingPage',
      type: 'reference',
      to: [
        { type: 'galleries' }
      ]
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string'
    },
    {
      title:'Phone',
      name: 'phone',
      type: 'string'
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      // creates an array of objects with
      // the shape we described in social.js
      type: 'array',
      of: [{type: 'social'}]
    },
    {
      title: 'Keywords',
      name: 'keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
