function ResultSection(props) {
  return (
    <div className="result-container">
      <section className="result-title">
        <span>{props.title}</span>
        <span>{props.quantity}</span>
      </section>
      <section className="">

      </section>
    </div>
  )
}

export default ResultSection;