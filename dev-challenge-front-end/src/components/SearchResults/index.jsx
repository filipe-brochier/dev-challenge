import ResultSection from '../ResultSection';
import equipments from '../../data/equipments.json';
import materials from '../../data/materials.json';
import purchase_orders from '../../data/purchase_orders.json';
import sales_orders from '../../data/sales_orders.json';
import workforce from '../../data/workforce.json';

function SearchResults() {
  return (
    <main>
      <div class="results-cards-container">
        <ResultSection title="Pedidos de Venda" source={sales_orders} key="MaterialName"/>
        <ResultSection title="Pedidos de Compra" source={purchase_orders} key="MaterialName"/>
        <ResultSection title="Produtos" source={materials} key="MaterialName"/>
        <ResultSection title="Equipamentos" source={equipments} key="EquipmentName"/>
        <ResultSection title="Mão de obra" source={workforce} key="Name"/>
      </div>
    </main>
  );
}

export default SearchResults;
