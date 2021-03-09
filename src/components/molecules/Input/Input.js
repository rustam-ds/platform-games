import React from 'react';
import styled, { css } from 'src/theme';
import { useLocales } from 'src/hooks/useLocales';

export const Input = props => {
  const locales = useLocales();

  return (
    <InputStyled
      onChange={props.onChange}
      value={props.value}
      placeholder={locales.components.main.search.placeholder}
      className={props.className}
    />
  );
};

const InputStyled = styled.input`
  ${props => css`
    width: ${props.theme.sizes.small.inputWidth}px;
    height: ${props.theme.sizes.small.inputHeight}px;
    padding-left: ${props.theme.uiPoint}px;
    font-size: ${props.theme.fonts.p1_size}px;
  `}
`;
