import React, { useCallback } from 'react';
import styled, { css } from 'src/theme';
import { useLocales } from 'src/hooks/useLocales';
import { Select } from 'src/components/molecules/Select';

export const Sort = props => {
  const locales = useLocales();

  const handleChange = useCallback(
    event => {
      switch (+event.target.value) {
        case 1:
          props.handleChange('-rating');
          break;
        case 2:
          props.handleChange('rating');
          break;
        case 3:
          props.handleChange('-released');
          break;
        case 4:
          props.handleChange('released');
          break;
      }
    },
    [props.cards]
  );

  return (
    <SortStyled>
      <TitleStyled>{locales.components.main.sort.label}</TitleStyled>
      <SelectStyled
        options={locales.components.main.sort.options}
        onChange={handleChange}
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
