import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import EmojiReplaceableText from '../components/EmojiReplaceableText'
import Profile from '../../static/img/profile.jpg'
import Translate, { translate } from '@docusaurus/Translate'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'
function Globe() {
  const canvasRef = useRef()

  useEffect(() => {
    let rotation = 0

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200,
      height: 1200,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [250 / 256, 94 / 256, 0 / 256],
      glowColor: [1, 1, 1],
      scale: 1,
      offset: [0, 0],
      markers: [
        { location: [37.5665, 126.978], size: 0.05 },
        { location: [34.0522, -118.2437], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = rotation
        rotation += 0.005
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.globe} />
}
const HeroText = () => {
  const delayInSeconds = 1

  return (
    <>
      <header>
        <h1 className={styles.intro}>
          <EmojiReplaceableText text={translate({ message: 'Sunghyun' })} photo={Profile} emojiByDefault='emoji' />
          <Translate>{' is a '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Computer Scientist' })} emoji='🧑🏻‍💻' emojiByDefault='emoji' />
          <Translate>{' based in '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'LA' })} emoji='🇺🇸' emojiByDefault='emoji' />
          <Translate>{' and '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Seoul' })} emoji='🇰🇷' emojiByDefault='emoji' />
          <Translate>{'. He currently works at a '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Unicorn' })} emoji='🦄' emojiByDefault='emoji' />
          <Translate>{' company '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Karrot' })} emoji='🥕' emojiByDefault='emoji' />
          <Translate>{', researching secure sandboxing model for '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Mini-Apps' })} emoji='📱' emojiByDefault='emoji' />
          <Translate>{'. He usually works on next-gen '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Web' })} emoji='🕸' emojiByDefault='emoji' />
          <Translate>{' Technologies, while his interest spans across variety of fields like '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Computer Graphics' })} emoji='👾' emojiByDefault='emoji' />
          <Translate>{', '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Medical AI' })} emoji='💊' emojiByDefault='emoji' />
          <Translate>{', '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Fusion Energies' })} emoji='☢️' emojiByDefault='emoji' />
          <Translate>{', and '}</Translate>
          <EmojiReplaceableText
            text={translate({ message: 'Space Terraformings' })}
            emoji='🚀'
            emojiByDefault='emoji'
          />
          <Translate>{'. When he is not coding, he enjoys learning '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Modern History' })} emoji='📰' emojiByDefault='emoji' />
          <Translate>{' and '}</Translate>
          <EmojiReplaceableText text={translate({ message: 'Economics' })} emoji='🏦' emojiByDefault='emoji' />
          <Translate>{'. '}</Translate>
          <br />
          <a href='https://mailhide.io/e/IXndXpED' target='_blank' rel='noopener noreferrer' className={styles.email}>
            <Translate>Get in touch.</Translate>
          </a>
        </h1>
      </header>
      <Globe />
    </>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <main className={styles.mainContainer}>
        <HeroText />
      </main>
    </Layout>
  )
}
