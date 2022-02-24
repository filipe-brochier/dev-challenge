import Provider from "./context/Provider";
import Header from "./components/Header";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import './global.css';

function App() {
  return (
    <Provider>
      <Header />
      <Search />
      <SearchResults />
    </Provider>
  );
}

export default App;
