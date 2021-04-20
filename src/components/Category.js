import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({
  id, name, description, path,
}) => (
  <Link to={path}>
    <div>
      <h5>{id}</h5>
      <h3>{name}</h3>
      <h3>{description}</h3>
    </div>
  </Link>
);

Category.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
