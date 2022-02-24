import { useState, useEffect, useContext } from 'react';
import ResultContext from '../../context/ResultContext';

function ResultSection({title, source, defaultKey}) {
  const { keyword } = useContext(ResultContext);
  const [quantity, setQuantity] = useState();
  const [filtered, setFilteredData] = useState(source);
  
  useEffect(() => {
    setQuantity(filtered.length)
  }, [filtered.length]);
  
  useEffect(() => {
    const filterByName = source.filter((item) => item[defaultKey].includes(keyword))
    setFilteredData(filterByName);
  }, [defaultKey, keyword, source])
  
  return (
    <div>
      <div className="result-card">
        <section className="result-title">
          <div>{title}</div>
          <div>{quantity > 0 ? `(${quantity} itens encontrados)` : '(nenhum item encontrado)'}</div>
        </section>
        <section className="result-data">
          {filtered.map((item) => (
            <div key={Math.random()}>
              <div key={Math.random()}>{item[Object.keys(item)[0]]}</div>
              <div key={Math.random()}>{item[defaultKey]}</div>
              <div key={Math.random()}>{item['Quantity'] && `Qtd: ${item['Quantity']} pc`}</div>
            </div>
            )
          )}
        </section>
      </div>
    </div>
    
  )
}

export default ResultSection;