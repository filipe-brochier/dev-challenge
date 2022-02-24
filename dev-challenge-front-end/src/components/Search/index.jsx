import { useContext, useState } from 'react';
import ResultContext from '../../context/ResultContext';
import searchIcon from '../../layout/searchIcon.png';
import './styles.css';

function Search() {
  const [localKeyword, setLocalKeyword] = useState();
  const { setKeyword } = useContext(ResultContext);
  return (
    <section className="search-container">
      <input 
        type="text" 
        className="search-input"
        placeholder='Faça sua busca aqui'
        onChange={ (e) => setLocalKeyword(e.target.value)}
      />
      <button type="button"
        className="search-button"
        onClick={ () => setKeyword(localKeyword)}
      >
        <img src={searchIcon} alt='search-icon' className="search-logo"/>
      </button>
    </section>
  );
}

export default Search;
