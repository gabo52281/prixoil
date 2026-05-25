function Features() {
  const items = [
    {
      title: "Mayor protección",
      text: "Reduce desgaste y protege el motor en altas temperaturas."
    },
    {
      title: "Más potencia",
      text: "Mejor respuesta y rendimiento para uso diario."
    },
    {
      title: "Más kilometraje",
      text: "Duración prolongada y excelente lubricación."
    }
  ];

  return (
    <section className="features">
      {items.map((item, index) => (
        <div className="feature-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;