import searchIcon from '../../layout/searchIcon.png';
import './styles.css';

function Search() {
  return (
    <section class="search-container">
      <input 
        type="text" 
        class="search-input"
        placeholder='Faça sua busca aqui'
      />
      <button type="button" class="search-button">
        <img src={searchIcon} alt='search-icon' class="search-logo"/>
      </button>
    </section>
  );
}

export default Search;
