import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from '../../../basic/Select';
import Option from '../../../basic/Option';
import Tab from '../../../basic/UnderlinedTab';
import { BACKGROUND_SECONDARY } from '../../../../theme';

const Container = styled.div`
  border-bottom: solid 2px ${BACKGROUND_SECONDARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterContainer = styled.div`
  widht: 100%;
  float: right;
`;

const FilterLabel = styled.span`
  padding: 2rem 1rem;
  text-transform: uppercase;
  opacity: 0.5;
  font-size: 1rem;
`;

const StyledSelect = styled(Select)`
  height: 3rem;
`;

const StyledTab = styled(Tab)`
  padding: 1rem 0;
  margin-right: 2rem;
  margin-bottom: -2px;
`;

export const filters = {
  all: 'All',
  documentary: 'Documentary',
  comedy: 'Comedy',
  horror: 'Horror',
  crime: 'Crime',
};

export const sortOptions = {
  title: 'Title',
  tagline: 'Tagline',
  vote_average: 'Vote Average',
  vote_count: 'Votes',
  release_date: 'Release Date',
  budget: 'Budget',
  revenue: 'Revenue',
  runtime: 'Runtime',
};

const GridControls = ({
  filter, sortBy, handleFilterChange, handleSortChange,
}) => (
  <Container>
    <div>
      {Object.entries(filters).map(([key, value]) => (
        <StyledTab
          key={key}
          selected={key === filter}
          onClick={() => handleFilterChange(key)}
        >
          {value}
        </StyledTab>
      ))}
    </div>
    <FilterContainer>
      <FilterLabel>Sort By</FilterLabel>
      <StyledSelect value={sortBy} onChange={(event) => handleSortChange(event.target.value)}>
        {Object.entries(sortOptions).map(
          ([key, value]) => <Option key={key} value={key}>{value}</Option>,
        )}
      </StyledSelect>
    </FilterContainer>
  </Container>
);

GridControls.propTypes = {
  filter: PropTypes.oneOf(['all', 'documentary', 'comedy', 'horror', 'crime']).isRequired,
  sortBy: PropTypes.oneOf(['title', 'tagline', 'vote_average', 'vote_count', 'release_date', 'budget', 'revenue', 'runtime']).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default GridControls;
