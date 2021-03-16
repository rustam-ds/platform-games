import React from 'react';
import styled, { css } from 'src/theme';

export const Loader = () => {
  return (
    <LoaderViewStyled>
      <LoaderStyled>
        <LoaderPartStyled />
        <LoaderPartStyled />
        <LoaderPartStyled />
        <LoaderPartStyled />
      </LoaderStyled>
    </LoaderViewStyled>
  );
};

const LoaderViewStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
`;

const LoaderStyled = styled.div`
  ${props => css`
    display: inline-block;
    position: relative;
    width: ${props.theme.sizes.medium.loader_diameter}px;
    height: ${props.theme.sizes.medium.loader_diameter}px;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: ${props.theme.sizes.medium.loader_diameter -
      props.theme.uiPoint * 3}px;
      height: ${props.theme.sizes.medium.loader_diameter -
      props.theme.uiPoint * 3}px;
      margin: ${(props.theme.uiPoint * 3) / 2}px;
      border: ${(props.theme.uiPoint * 3) / 2}px solid
        ${props.theme.colors.loader_background};
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${props.theme.colors.loader_background} transparent
        transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;

const LoaderPartStyled = styled.div``;
