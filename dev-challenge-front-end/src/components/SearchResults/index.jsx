import ResultSection from '../ResultSection';
import equipments from '../../data/equipments.json';
import materials from '../../data/materials.json';
import purchase_orders from '../../data/purchase_orders.json';
import sales_orders from '../../data/sales_orders.json';
import workforce from '../../data/workforce.json';
import './styles.css';

function SearchResults() {
  return (
    <main>
        <ResultSection title="Pedidos de Venda" source={sales_orders} defaultKey="MaterialName"/>
        {/* <ResultSection title="Pedidos de Compra" source={purchase_orders} defaultKey="MaterialName"/> */}
        {/* <ResultSection title="Produtos" source={materials} defaultKey="MaterialName"/> */}
        {/* <ResultSection title="Equipamentos" source={equipments} defaultKey="EquipmentName"/> */}
        {/* <ResultSection title="Mão de obra" source={workforce} defaultKey="Name"/> */}
    </main>
  );
}

export default SearchResults;
