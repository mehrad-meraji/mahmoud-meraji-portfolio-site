// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import resolverInput from 'part:@sanity/form-builder/input-resolver'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import comment from './comment'
import artwork from "./documents/artwork";
import picture from "./objects/picture";
import siteSettings from "./objects/siteSettings";
import social from "./documents/social";
import artworkBlock from "./objects/artworkBlock";
import galleries from "./documents/galleries";
import textBlock from "./objects/textBlock";
import layout from "./objects/layout";
import heroBlock from "./objects/heroBlock";
import artworkSize from "./objects/artworkSize";
import menu from './objects/menu';
import galleryBlock from './objects/galleryBlock';
import selectedWorksBlock from './objects/selectedWorksBlock';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    menu,
    social,
    blockContent,
    artwork,
    artworkBlock,
    picture,
    galleries,
    textBlock,
    layout,
    heroBlock,
    artworkSize,
    galleryBlock,
    selectedWorksBlock
  ])
})
