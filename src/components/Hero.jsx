import oil from "../assets/oil.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">MAX PERFORMANCE</span>

        <h1>
          Protección extrema
          <br />
          para tu motocicleta
        </h1>

        <p>
          Aceite premium diseñado para máximo rendimiento,
          protección del motor y mayor duración.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Comprar</button>
          <button className="secondary-btn">Más información</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={oil} alt="Aceite para motocicleta" />
      </div>
    </section>
  );
}

export default Hero;