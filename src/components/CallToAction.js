import './CallToAction.css'

const CallToAction = () => {

  const emitClick = () => {
    console.log('click')
  }

  return (
    <section className="call-to-action box">
      <div className="call-to-action__container box__container">
        <p className="call-to-action__text">SUSCRIBETE A NUESTRO NEWSLETTER Y CONSIGUE 15% DE DESCUENTO.</p>
        <button onClick={ emitClick }
          className="button primary-button">SUBSCRIBIRME</button>
      </div>
    </section>
  )
}

export default CallToAction
