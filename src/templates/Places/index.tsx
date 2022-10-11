import { NextSeo } from 'next-seo'

import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'
import { useRouter } from 'next/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Jobs in the world`}
        description={place.description.html}
        canonical="https://jib-narradorww.vercel.app/"
        openGraph={{
          url: 'https://jib-narradorww.vercel.app/',
          title: `${place.name} - My Jobs in the world`,
          description: place.description.html,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name} - My Jobs in the world`
            }
          ],
          site_name: `${place.name} - My Jobs in the world`
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <>
                <Image
                  key={`photo-${index}`}
                  src={image.url}
                  alt={place.name}
                  width={1000}
                  height={600}
                />
              </>
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
