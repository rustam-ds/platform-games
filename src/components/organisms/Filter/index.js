import React from 'react';
import styled, { css } from 'src/theme';
import { Select } from 'src/components/molecules/Select';
import { usePresenter } from './usePresenter';
import { useLocales } from 'src/hooks/useLocales';

export const Filter = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <FilterStyled>
      <TitleStyled>{locales.components.main.filter.label}</TitleStyled>
      <SelectStyled
        options={presenter.options}
        onChange={presenter.onChange}
        isVisible={presenter.isVisibleElseOption}
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
