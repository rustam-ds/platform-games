import React from 'react';
import styled, { css } from 'src/theme';
import { Link } from 'react-router-dom';
import { useStoreon } from 'storeon/react';
import { routes } from 'src/utils/routes';
import { useLocales } from 'src/hooks/useLocales';

export const Layout = props => {
  const { app } = useStoreon('app');
  const locales = useLocales();

  return (
    app.isInit && (
      <LayoutStyled>
        <HeaderStyled>
          <Link to={routes.index}>
            <TitleStyled>{locales.components.header.title}</TitleStyled>
          </Link>
        </HeaderStyled>
        {props.children}
        <FooterStyled>
          <InfoStyled>{locales.components.footer.lawInfo}</InfoStyled>
        </FooterStyled>
      </LayoutStyled>
    )
  );
};

const LayoutStyled = styled.div`
  ${props => css`
    width: 96%;
    margin: auto;
    padding: ${props.theme.uiPoint * 6}px ${props.theme.uiPoint * 3}px;

    @media ${props.theme.media.desktop} {
      width: 90%;
    }
  `}
`;

const HeaderStyled = styled.header`
  ${props => css`
    text-align: center;

    @media ${props.theme.media.desktop} {
      text-align: left;
    }
  `}
`;

const TitleStyled = styled.h1`
  ${props => css`
    font-size: ${props.theme.fonts.h1_size}px;
    font-weight: ${props.theme.fonts.boldWeight};
  `}
`;

const FooterStyled = styled.footer`
  ${props => css`
    text-align: center;
  `}
`;

const InfoStyled = styled.p``;
