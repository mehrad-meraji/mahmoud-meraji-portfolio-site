import Container from '../components/container'
import Layout from '../components/layout'
import {getSiteDetails} from '../lib/api'
import Head from 'next/head'
import Header from "../components/header";
import RenderSections from "../components/render-sections";

export default function Index({ siteSettings, preview }) {
  const { siteName, landingPage: { title, pageBuilder } } = siteSettings[0]
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`${siteName} - ${title}`}</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <Container>
          <Header siteName={siteName}/>
          <RenderSections sections={pageBuilder}/>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const siteSettings = await getSiteDetails()
  return {
    props: { siteSettings, preview },
    revalidate: 1
  }
}
