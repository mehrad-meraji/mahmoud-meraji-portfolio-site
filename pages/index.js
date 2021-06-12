import Layout from '../components/layout'
import {getSiteDetails} from '../lib/api'
import Head from 'next/head'
import RenderSections from "../components/render-sections";
import {useState} from "react";
import PasswordPage from "./passwordPage";
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
        </Head>
        <div className="flex items-center justify-center flex-wrap flex-grow">
          {isPasswordProtected && !authenticate ? <PasswordPage authenticate={setAuthenticate}/> : null}
          {isPasswordProtected && authenticate ?  <>
              { !loaded ? <TitleCard loaded={setLoaded}/> : null }
            </> : null }
          <RenderSections visible={isPasswordProtected ? authenticate : true} sections={content}/>
        </div>
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
