import oil from "../assets/oil.png";

function Product() {
  return (
    <section className="product-section">
      <div className="product-image">
        <img src={oil} alt="Producto" />
      </div>

      <div className="product-info">
        <span className="section-tag">PRODUCTO PREMIUM</span>

        <h2>20W-50 Motorcycle Engine Oil</h2>

        <p>
          Fórmula avanzada diseñada para motocicletas de alto desempeño.
          Excelente estabilidad térmica y máxima protección.
        </p>

        <ul>
          <li>✔ Protección metálica avanzada</li>
          <li>✔ Menor desgaste del motor</li>
          <li>✔ Alto desempeño térmico</li>
          <li>✔ Ideal para uso urbano y carretera</li>
        </ul>

        <button className="primary-btn">Solicitar ahora</button>
      </div>
    </section>
  );
}

export default Product;