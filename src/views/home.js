import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>(((TW)))</title>
        <meta
          name="description"
          content="Travis Wyche is an Interdisciplinary artist, musician, researcher, designer, &amp; philosopher of the expanded field"
        />
        <meta property="og:title" content="(((TW)))" />
        <meta
          property="og:description"
          content="Travis Wyche is an Interdisciplinary artist, musician, researcher, designer, &amp; philosopher of the expanded field"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/19ff8ecf-fa1b-4301-ab12-51fbfa4fe15d/bd0535a6-dd91-4ae5-8917-ab7e23784324?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <span className="home-text">
        <span>
          Travis wyche
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>is an Interdisciplinary artist</span>
        <br></br>
        <span>musician</span>
        <br></br>
        <span>researcher</span>
        <br></br>
        <span>designer</span>
        <br></br>
        <span>
          philosopher
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>of the expanded field</span>
      </span>
      <a
        href="https://gallery.so/TravisWyche/galleries"
        target="_blank"
        rel="noreferrer noopener"
        className="home-text14"
      >
        gallery
      </a>
      <a
        href="https://open.spotify.com/artist/7suuNSU4rT0y8Hn7LJnHcR?si=zNACp82sR96k57d6rBU_kQ"
        target="_blank"
        rel="noreferrer noopener"
        className="home-text15"
      >
        spotify
      </a>
      <a
        href="https://www.threeears.site/"
        target="_blank"
        rel="noreferrer noopener"
        className="home-text16"
      >
        three ears
      </a>
      <a
        href="https://paragraph.xyz/@traviswyche"
        target="_blank"
        rel="noreferrer noopener"
        className="home-text17"
      >
        paragraph
      </a>
      <a
        href="https://t.me/traviswyche"
        target="_blank"
        rel="noreferrer noopener"
        className="home-text18"
      >
        telegram
      </a>
      <a href="mailto:traviswyche@proton.me?subject=" className="home-text19">
        eh mail
      </a>
    </div>
  )
}

export default Home
