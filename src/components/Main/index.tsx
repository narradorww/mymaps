import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/boilerplatenext.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>A boilerplate to NextJS Projects4 </S.Title>
      <S.Description>
        A simple project starter to work with TypeScript, React, NextJS and
        Styled, based on the course React Avançado by{' '}
        <a href="https://github.com/willianjusten/my-trips">
          Willian Justen de Vasconcellos{' '}
        </a>
      </S.Description>
      <S.Illustration
        src="/img/travel-illustration.svg"
        alt="uma bussola, um mapa, uma maquina fotografica e um relógio"
      />
    </S.Wrapper>
  )
}

export default Main
