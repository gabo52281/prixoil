function Header() {
  return (
    <header className="header">
      <a href="#top" className="logo">
  <span>PRIX</span> OIL
</a>

      <nav>
        <a href="#benefits">Beneficios</a>
        <a href="#product">Producto</a>
        <a href="#contact">Contacto</a>
      </nav>

      <button className="header-btn">
        Comprar ahora
      </button>
    </header>
  );
}

export default Header;