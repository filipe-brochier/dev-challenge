import { useState, useEffect } from 'react';

function ResultSection(props) {
  const [quantity, setQuantity] = useState();
  
  useEffect(() => {
    setQuantity(props.source.length)
  }, [props.source.length]);

  return (
    <div className="result-container">
      <section className="result-title">
        <span>{props.title}</span>
        <span>{quantity}</span>
      </section>
      <section className="result-data">
      <span>{quantity}</span>
      </section>
    </div>
  )
}

export default ResultSection;