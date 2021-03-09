import React from 'react';
import styled, { css } from 'src/theme';
import { useLocales } from 'src/hooks/useLocales';

export const Select = props => {
  const locales = useLocales();

  return (
    <SelectStyled className={props.className} onChange={props.onChange}>
      {props.isVisible && (
        <option key={-1} value={-1}>
          {locales.components.main.filter.elseOption}
        </option>
      )}
      {props.options.map(select => (
        <option key={select.id} value={select.id}>
          {select.name}
        </option>
      ))}
    </SelectStyled>
  );
};

const SelectStyled = styled.select`
  ${props => css`
    font-size: ${props.theme.fonts.p1_size}px;
    width: ${props.theme.sizes.small.selectWidth}px;
    height: ${props.theme.sizes.small.selectHeight}px;
    padding-left: ${props.theme.uiPoint}px;
  `}
`;
