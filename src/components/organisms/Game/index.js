import React from 'react';
import styled, { css } from 'src/theme';
import { Loader } from 'src/components/molecules/Loader';
import { usePresenter } from './usePresenter';
import { useLocales } from 'src/hooks/useLocales';
import { Slider } from 'src/components/molecules/Slider';

export const Game = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <div>
      {presenter.loading ? (
        <Loader />
      ) : (
        <GameStyled>
          <TitleStyled>{presenter.game.name}</TitleStyled>
          <DescriptionStyled>
            {presenter.game.description_raw}
          </DescriptionStyled>
          {presenter.game.website && (
            <LinkStyled href={presenter.game.website} target={'_blank'}>
              {locales.components.game.linkSiteLabel} {presenter.game.website}
            </LinkStyled>
          )}
          {presenter.game.tags && <Slider images={presenter.game.tags} />}
        </GameStyled>
      )}
    </div>
  );
};

const GameStyled = styled.div`
  ${props => css`
    margin-top: ${props.theme.uiPoint * 3}px;
  `}
`;

const TitleStyled = styled.h3`
  ${props => css`
    font-size: ${props.theme.fonts.h3_size}px;
    font-weight: ${props.theme.fonts.semiBoldWeight};
    text-align: center;

    @media ${props.theme.media.desktop} {
      text-align: left;
    }
  `}
`;

const DescriptionStyled = styled.p`
  ${props => css`
    margin: ${props.theme.uiPoint * 2}px 0 ${props.theme.uiPoint * 3}px;
  `}
`;

const LinkStyled = styled.a``;
