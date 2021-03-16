import React from 'react';
import styled, { css } from 'src/theme';
import { Link } from 'react-router-dom';
import { useLocales } from 'src/hooks/useLocales';

export const Card = props => {
  const locales = useLocales();

  return (
    <CardStyled>
      <Link to={`/game/${props.id}`}>
        <TitleStyled>{props.name}</TitleStyled>
        <ImgStyled src={props.image} alt={props.name} />
        {props.rate && (
          <RateStyled>
            {locales.components.main.cards.rateLabel} {props.rate}
          </RateStyled>
        )}
        {props.date && (
          <DateStyled>
            {locales.components.main.cards.dateLabel} {props.date}
          </DateStyled>
        )}
      </Link>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  ${props => css`
    width: ${props.theme.sizes.small.card_width}px;
    background: ${props.theme.colors.card_background};
    box-shadow: ${props.theme.boxShadow.card};
    border-radius: ${props.theme.uiPoint * 3}px;
    margin: 0 ${props.theme.uiPoint * 2}px ${props.theme.uiPoint * 3}px;
    padding: ${props.theme.uiPoint * 4}px ${props.theme.uiPoint}px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      box-shadow: ${props.theme.boxShadow.card_hover};
    }

    @media ${props.theme.media.desktop} {
      width: ${props.theme.sizes.medium.card_width}px;
      margin: 0;
    }
  `}
`;

const TitleStyled = styled.h4`
  ${props => css`
    font-size: ${props.theme.fonts.h4_size}px;
  `}
`;

const ImgStyled = styled.img`
  ${props => css`
    display: block;
    width: ${props.theme.sizes.small.card_img_width}px;
    height: ${props.theme.sizes.small.card_img_height}px;
    margin: ${props.theme.uiPoint * 3}px auto;
  `}
`;

const RateStyled = styled.p`
  ${props => css`
    margin-bottom: ${props.theme.uiPoint * 2}px;
  `}
`;

const DateStyled = styled.p``;
