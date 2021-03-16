import React from 'react';
import styled, { css } from 'src/theme';
import { usePresenter } from './usePresenter';
import { useLocales } from 'src/hooks/useLocales';
import { Select } from 'src/components/molecules/Select';

export const Sort = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <SortStyled>
      <TitleStyled>{locales.components.main.sort.label}</TitleStyled>
      <SelectStyled
        options={locales.components.main.sort.options}
        onChange={presenter.onChange}
      />
    </SortStyled>
  );
};

const SortStyled = styled.div`
  ${props => css`
    padding-top: ${props.theme.uiPoint * 2}px;
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
