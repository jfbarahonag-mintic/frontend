import './SubscribeForm.css'

const SubscribeForm = () => {
  return (
    <div className="subscribe-form">
      <h2 className="subscribe-form__title">Ingresa tus datos</h2>
      <form>
        <div className="subscribe-form__field">
          <label htmlFor="subscriberName"
            className="subscribe-form__label">Nombre:</label>
          <input 
            id="subscriberName"
            type="text"
            className="subscribe-form__input"
          />
        </div>
        <div className="subscribe-form__field">
          <label htmlFor="subscriberEmail"
            className="subscribe-form__label">Email:</label>
          <input 
            id="subscriberEmail"
            type="text"
            className="subscribe-form__input"
          />
        </div>
        <div className="subscribe-form__buttons-box">
          <button className="button secondary-button">CANCELAR</button>
          <button className="button primary-button">SUBSCRIBIRSE</button>
        </div>
      </form>
    </div>
  )
}

export default SubscribeForm
