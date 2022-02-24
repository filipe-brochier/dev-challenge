import { useState } from 'react';
import PropTypes from 'prop-types';
import ResultContext from './ResultContext';

export default function Provider({children}) {
  const [keyword, setKeyword] = useState('');
  
  const context = {
    keyword,
    setKeyword
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