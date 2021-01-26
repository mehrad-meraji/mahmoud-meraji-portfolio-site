import Container from '../components/container'
import Layout from '../components/layout'
import {getSiteDetails} from '../lib/api'
import Head from 'next/head'
import Header from "../components/header";
import RenderSections from "../components/render-sections";
import {useState} from "react";
import PasswordPage from "./passwordPage";
import Footer from "../components/footer";
import "animate.css"
import TitleCard from "./titleCard";

export default function Index({ siteSettings, preview }) {
  const { siteName, landingPage: { title, content, isPasswordProtected } } = siteSettings[0]
  const [ authenticate, setAuthenticate ] = useState(false);
  const [ loaded, setLoaded ] = useState(false);
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
          <div className="flex flex-1">
            {isPasswordProtected && !authenticate ? <PasswordPage authenticate={setAuthenticate}/> : null}
            {isPasswordProtected && authenticate ?  <>
                { !loaded ? <TitleCard loaded={setLoaded}/> : null }
              </> : null }
            <RenderSections visible={isPasswordProtected ? authenticate : true} sections={content}/>
          </div>
          <Footer />
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
