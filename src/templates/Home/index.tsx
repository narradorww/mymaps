import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Home"
        description="A simple project to show in a map the places that I've worked"
        openGraph={{
          url: 'https://jib-narradorww.vercel.app/',
          title: 'My Jobs in the world',
          description:
            'A simple project to show in a map the places that I´ve worked',
          images: [
            {
              url: 'https://jib-narradorww.vercel.app/img/myjobscover.png',
              width: 1280,
              height: 720,
              alt: 'My Jobs in the world'
            }
          ],
          site_name: 'My Jobs in the world'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
