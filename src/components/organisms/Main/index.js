import React from 'react';
import ReactPaginate from 'react-paginate';
import styled, { css } from 'src/theme';
import { usePresenter } from './usePresenter';
import { Sort } from 'src/components/organisms/Sort';
import { Filter } from 'src/components/organisms/Filter';
import { Search } from 'src/components/organisms/Search';
import { Cards } from 'src/components/organisms/Cards';
import { Loader } from 'src/components/molecules/Loader';
import { useLocales } from 'src/hooks/useLocales';

export const Main = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <MainStyled>
      <OptionsStyled>
        <Sort />
        <Filter />
        <Search />
      </OptionsStyled>
      {presenter.loading ? <Loader /> : <Cards />}
      <StyledReactPaginate>
        <ReactPaginate
          previousLabel={locales.components.main.cards.pagination.prev}
          nextLabel={locales.components.main.cards.pagination.next}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={presenter.count}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={presenter.onClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </StyledReactPaginate>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  ${props => css`
    padding: ${props.theme.uiPoint * 2}px 0;
    text-align: center;

    @media ${props.theme.media.desktop} {
      text-align: left;
    }
  `}
`;

const OptionsStyled = styled.div`
  ${props => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${props.theme.media.desktop} {
      justify-content: left;
    }
  `}
`;

const StyledReactPaginate = styled.div`
  ${props => css`
    .pagination {
      color: #0366d6;

      display: flex;
      justify-content: space-between;
      width: ${props.theme.sizes.medium.pagination_width}px;
      margin-top: ${props.theme.uiPoint * 3}px;
      cursor: pointer;
      border: none;
      background: transparent;
    }
    .break-me {
      cursor: default;
    }
    .active {
      color: ${props.theme.colors.pagination_active_number};
      font-weight: ${props.theme.fonts.boldWeight};
      background: transparent;
      border: none;
    }
  `}
`;
