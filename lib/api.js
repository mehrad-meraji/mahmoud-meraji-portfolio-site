import client, { previewClient } from './sanity';

const pageBuilder = `content[]{
  ...,
  _type == 'heroBlock' => {
    ...,
    hero{
      ...,
      asset->{url}
    }
  },

  _type == 'textBlock' => {
    ...
  },
  
  _type == 'artworkBlock' => {
    ...,
    artwork->{
      ...,
      picture {
        alt,
        asset->
      }
    }
  },
  
  _type == 'selectedWorksBlock' => {
    content[]->{
      ...,
      picture {
        alt,
        asset->
      }
    }
  }
}`
const gallery = `{
  _id,
  title,
  isPasswordProtected,
  isActive,
  ${pageBuilder}
}`

export async function getPublicGalleriesPreview() {
  return await getClient(false).fetch(`*[_type == "galleries" && !isPasswordProtected && isActive] {
    _id,
    title,
    date,
    slug,
    "preview": previewArtwork[0]->{
      ...,
      picture {
        alt,
        asset->
      }
    },
  }`)
}

export async function getAllSeriesWithSlug() {
  return await client.fetch(`*[_type == "galleries" && !isPasswordProtected && isActive]{ 'slug': slug.current }`)
}

export async function getSiteDetails() {
  return await getClient(true).fetch(`*[_type == "siteSettings"] {
    ...,
    "landingPage": landingPage->${gallery}
  }`)
}

const getClient = (preview) => (preview ? previewClient : client)

export async function getAllSeriesBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "galleries" && slug.current == $slug] | order(publishedAt desc){
       ...,
       ${pageBuilder}
     }`,
    { slug }
  )
  return data[0]
}
