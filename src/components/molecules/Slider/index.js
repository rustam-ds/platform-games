import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'src/theme';
import { useLocales } from 'src/hooks/useLocales';

export const Slider = props => {
  const [indexForSliderImages, setIndexForSliderImages] = useState(0);
  const locales = useLocales();

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [indexForSliderImages]);

  const showNextImage = useCallback(() => {
    if (indexForSliderImages === props.images.length - 1) {
      setIndexForSliderImages(0);
    } else {
      setIndexForSliderImages(indexForSliderImages + 1);
    }
  }, [indexForSliderImages]);

  const showPrevImage = useCallback(() => {
    if (indexForSliderImages === 0) {
      const selectedIndex = props.images.length - 1;
      setIndexForSliderImages(selectedIndex);
    } else {
      setIndexForSliderImages(indexForSliderImages - 1);
    }
  }, [indexForSliderImages]);

  return (
    <WrapperStyled>
      <ArrowLeftStyled onClick={showPrevImage}>
        <ArrowStyled src={locales.components.game.slider.arrows.left} />
      </ArrowLeftStyled>
      <ImageStyled
        src={props.images[indexForSliderImages].image_background}
        alt={''}
      />
      <ArrowRightStyled onClick={showNextImage}>
        <ArrowStyled src={locales.components.game.slider.arrows.right} />
      </ArrowRightStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  ${props => css`
    position: relative;
    margin-bottom: ${props.theme.uiPoint * 2}px;
  `}
`;

const ImageStyled = styled.img`
  ${props => css`
    width: 100%;
    height: auto;
    margin: auto;

    @media ${props.theme.media.desktop} {
      left: 0;
      top: 0;
      padding: 0 ${props.theme.uiPoint * 4}px;
      width: 100%;
      min-width: auto;
    }
  `}
`;

const commonArrowStyled = css`
  ${props => css`
    display: none;
    position: absolute;

    &:hover {
      background: ${props.theme.colors.slider_arrows_background_hover};
    }

    @media ${props.theme.media.desktop} {
      top: ${props.theme.uiPoint * 34}px;
      top: 50%;
      width: ${props.theme.uiPoint * 8 - 2}px;
      height: ${props.theme.uiPoint * 8 - 2}px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      transition: 0.2s;
    }
  `}
`;

const ArrowLeftStyled = styled.button`
  ${props => css`
    ${commonArrowStyled};

    left: -5%;
    z-index: 1000;
  `}
`;

const ArrowRightStyled = styled.button`
  ${props => css`
    ${commonArrowStyled};

    right: -5%;
  `}
`;

const ArrowStyled = styled.img``;
