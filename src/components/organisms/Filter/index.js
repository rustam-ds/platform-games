import React, { useCallback } from 'react';
import styled, { css } from 'src/theme';
import { Select } from 'src/components/molecules/Select';
import { useLocales } from 'src/hooks/useLocales';

export const Filter = props => {
  const locales = useLocales();

  const handleChange = useCallback(
    event => {
      if (event.target.value === '-1') {
        props.handleChange(null);
      } else {
        props.handleChange(event.target.value);
      }
    },
    [props.platforms, props.cards]
  );

  const isVisibleElseOption = true;

  return (
    <FilterStyled>
      <TitleStyled>{locales.components.main.filter.label}</TitleStyled>
      <SelectStyled
        options={props.platforms}
        onChange={handleChange}
        isVisible={isVisibleElseOption}
      />
    </FilterStyled>
  );
};

const FilterStyled = styled.div`
  ${props => css`
    padding-top: ${props.theme.uiPoint * 2}px;

    @media ${props.theme.media.desktop} {
      margin-left: ${props.theme.uiPoint * 4}px;
    }
  `}
`;

const TitleStyled = styled.h3`
  ${props => css`
    font-size: ${props.theme.fonts.h3_size}px;
    font-weight: ${props.theme.fonts.semiBoldWeight};
  `}
`;

const SelectStyled = styled(Select)`
  ${props => css`
    margin-top: ${props.theme.uiPoint}px;

    @media ${props.theme.media.desktop} {
      margin-top: ${props.theme.uiPoint * 2}px;
    }
  `}
`;
