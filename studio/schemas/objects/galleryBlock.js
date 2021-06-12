import galleries from '../documents/galleries';
import {qF} from "sanity-quick-fields";

export default {
  name: 'galleryBlock',
  title: 'Gallery Block',
  type: 'object',
  fields: [
    qF('title'),
    qF('slug'),
    {
      name: 'page',
      type: 'reference',
      to: [
        { type: 'galleries' }
      ]
    },
  ]
}
