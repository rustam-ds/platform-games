import React, { useCallback } from 'react';
import styled, { css } from 'src/theme';
import { useLocales } from 'src/hooks/useLocales';
import { Input } from 'src/components/molecules/Input/Input';

export const Search = props => {
  const locales = useLocales();

  const onChange = useCallback(
    event => {
      props.onChange(event.target.value);
    },
    [props.platforms, props.cards]
  );

  return (
    <SearchStyled>
      <TitleStyled>{locales.components.main.search.label}</TitleStyled>
      <InputStyled onChange={onChange} value={props.inputValue} />
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
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

const InputStyled = styled(Input)`
  ${props => css`
    margin-top: ${props.theme.uiPoint}px;

    @media ${props.theme.media.desktop} {
      margin-top: ${props.theme.uiPoint * 2}px;
    }
  `}
`;
