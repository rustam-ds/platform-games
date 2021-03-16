import React from 'react';
import styled, { css } from 'src/theme';
import { usePresenter } from './usePresenter';
import { Card } from 'src/components/molecules/Card';

export const Cards = () => {
  const presenter = usePresenter();

  return (
    <CardsStyled>
      {presenter.cards.map(card => (
        <Card
          key={card.id}
          name={card.name}
          rate={card.rating}
          image={card.background_image}
          date={card.released}
          id={card.id}
        />
      ))}
    </CardsStyled>
  );
};

const CardsStyled = styled.div`
  ${props => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: ${props.theme.uiPoint * 5}px;
    text-align: center;

    @media ${props.theme.media.desktop} {
      display: grid;
      grid-template-columns: repeat(
        auto-fill,
        minmax(${props.theme.sizes.medium.card_width}px, 1fr)
      );
      grid-gap: ${props.theme.uiPoint * 4}px;
    }
  `}
`;
