import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import { getAllSeriesBySlug, getAllSeriesWithSlug, getSiteDetails } from '../../lib/api';
import Head from 'next/head';
import React, { useState } from 'react';
import RenderSections from '../../components/render-sections';
import { imageBuilder } from '../../lib/sanity';
import Magnifier from '../../components/magnifier';

export default function SeriesGallery({ gallery, preview, siteSettings }) {
  const { title, content, isPasswordProtected } = gallery
  const [ authenticate, setAuthenticate ] = useState(!isPasswordProtected);
  const router = useRouter()
  if (!siteSettings) return (<div>nothing here</div>)
  const { siteName } = siteSettings[0]
  if (!router.isFallback && !gallery?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Head>
        <title>Mahmoud Meraji - {gallery.title}</title>
      </Head>
      <div className="flex items-center justify-center flex-wrap flex-grow">
        <RenderSections visible={authenticate} sections={content}/>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getAllSeriesBySlug(params.slug, preview)
  const siteSettings = await getSiteDetails()
  return {
    props: {
      siteSettings,
      preview,
      gallery: data || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllSeriesWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          allPosts,
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
