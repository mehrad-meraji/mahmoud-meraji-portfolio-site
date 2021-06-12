import React from 'react';
import { getPublicGalleriesPreview } from '../../lib/api';
import Layout from '../../components/layout';
import Head from 'next/head';
import Link from 'next/link'

export default function Series({ galleries, preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Mahmoud Meraji - Series</title>
      </Head>
      <section className="flex items-center justify-center flex-wrap flex-grow">
        {
          galleries.map(({ _id, title, slug, date, preview: { picture: { asset: { url } } }}) =>
            (<Link key={_id} as={`/series/${slug.current}`} href="/series/[slug]">
              <a>
                <div className="cursor-pointer hover:bg-gray-200 p-8">
                  <img alt="" src={url} className="max-w-2xl max-h-96" />
                  <h2 className="mt-4 text-2xl font-bold font-display">{title}</h2>
                  <p className="text-xl font-light">{date}</p>
                </div>
              </a>
            </Link>))
        }
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const galleries = await getPublicGalleriesPreview()
  return {
    props: { galleries, preview },
    revalidate: 1
  }
}
