import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ResultContext from './ResultContext';

export default function Provider({children}) {
  const context = {

  }
  return (
    <ResultContext.Provider value={ context }>
      { children }
    </ResultContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};