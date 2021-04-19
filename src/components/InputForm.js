/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchBar = styled.input`
  padding: 0.5rem 1rem 0 1rem;
  width: 100%;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.5rem;
  border: none;
  border-bottom: 3px solid black;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: lightgray;
  }
  :-ms-input-placeholder {
    color: lightgray;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    }
`;

const Filter = (props) => {
  const { updateEntry } = props;

  const handleChange = (e) => {
    updateEntry(e.target.value);
  };

  return (
    <div>
      <SearchBarContainer>
        <SearchBar onChange={handleChange} type="text" placeholder="SEARCH BY NAME" />
      </SearchBarContainer>
    </div>
  );
};

Filter.defaultProps = {
  updateEntry: '',
};

Filter.propTypes = {
  updateEntry: PropTypes.func,
};

export default Filter;
