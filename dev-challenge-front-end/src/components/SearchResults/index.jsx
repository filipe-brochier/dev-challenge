import ResultSection from '../ResultSection';

function SearchResults() {
  return (
    <main>
      <div class="results-cards-container">
        <ResultSection title="Pedidos de Venda" isActive/>
        <ResultSection title="Pedidos de Compra" isActive/>
        <ResultSection title="Produtos" isActive/>
        <ResultSection title="Produtos de Venda" isActive/>
        <ResultSection title="Produtos de Venda" isActive/>
      </div>
    </main>
  );
}

export default SearchResults;
